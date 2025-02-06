import { isAxiosError } from "axios";
import { axiosInstance } from "@/shared/api/instance";
import {
    ApiResponse,
    IAuthResponse,
    ErrorResponseData,
    LoginCredentials,
    RegisterCredentials,
} from "../../../features/auth/types/auth-types";
import { UserProfile } from "../types/auth-api-types";

type RequestInfo = {
    count: number;
    timestamp: number;
};

type RequestQueue = {
    [key: string]: RequestInfo;
};

export class AuthService {
    private static requestQueue: RequestQueue = {};
    private static readonly REQUEST_LIMIT = 5;
    private static readonly TIME_FRAME = 5000;

    private static canMakeRequest(key: string): boolean {
        const now = Date.now();
        const requestInfo = this.requestQueue[key];

        if (!requestInfo) {
            this.requestQueue[key] = { count: 1, timestamp: now };
            return true;
        }

        if (now - requestInfo.timestamp > this.TIME_FRAME) {
            this.requestQueue[key] = { count: 1, timestamp: now };
            return true;
        }

        if (requestInfo.count < this.REQUEST_LIMIT) {
            requestInfo.count++;
            return true;
        }

        return false;
    }

    static async login(credentials: LoginCredentials): Promise<ApiResponse<IAuthResponse>> {
        if (!this.canMakeRequest('login')) {
            return { error: "Too many requests. Please wait before trying again." };
        }

        try {
            const response = await axiosInstance.post<IAuthResponse>("/login", credentials);
            return { data: response.data };
        } catch (error) {
            return this.handleError(error);
        }
    }

    static async register(credentials: Omit<RegisterCredentials, "confirmPassword">): Promise<ApiResponse<unknown>> {
        if (!this.canMakeRequest('register')) {
            return { error: "Too many requests. Please wait before trying again." };
        }

        try {
            const response = await axiosInstance.post("/register", credentials);
            return response.status === 200 || response.status === 201
                ? { data: "Registration successful" }
                : { error: `Unexpected status code: ${response.status}` };
        } catch (error) {
            return this.handleError(error);
        }
    }

    static async getMe(bearerToken: string, signal?: AbortSignal): Promise<ApiResponse<UserProfile>> {
        if (!this.canMakeRequest('getMe')) {
            return { error: "Too many requests. Please wait before trying again." };
        }

        try {
            if (!(await this.validateToken(bearerToken))) {
                return { error: "Invalid or expired token" };
            }

            const response = await axiosInstance.get<UserProfile>("/me", {
                headers: { Authorization: `Bearer ${bearerToken}` },
                signal,
            });
            return { data: response.data };
        } catch (error) {
            return this.handleError(error);
        }
    }

    static async validateToken(token: string): Promise<boolean> {
        if (!this.canMakeRequest('validateToken')) {
            return false;
        }

        try {
            const response = await axiosInstance.get<UserProfile>("/me", {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.status === 200;
        } catch {
            return false;
        }
    }

    public static handleError(error: unknown): ApiResponse<never> {
        if (isAxiosError(error)) {
            if (error.response?.status === 429) {
                return { error: "Too many requests, please try again later" };
            }

            const serverError = error.response?.data as ErrorResponseData;
            return {
                error: this.getErrorMessage(serverError) || error.message,
            };
        }

        if (error instanceof Error) {
            return { error: error.message };
        }

        return { error: "Unknown error occurred" };
    }

    private static getErrorMessage(errorData: ErrorResponseData): string {
        if (errorData.message) return errorData.message;
        if (errorData.errors?.length) return errorData.errors[0].msg;
        return "Unknown server error";
    }
}
