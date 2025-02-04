import { AxiosResponse, isAxiosError } from "axios";
import { axiosInstance } from "@/shared/api/instance";
import {
    ApiResponse,
    IAuthResponse,
    UserProfile,
    ErrorResponseData,
    LoginCredentials,
    RegisterCredentials,
} from "../types/auth-types";

export class AuthService {
    static async login(credentials: LoginCredentials): Promise<ApiResponse<IAuthResponse>> {
        try {
            const response = await axiosInstance.post<IAuthResponse>("/login", credentials);
            return { data: response.data }
        } catch (error) {
            return this.handleError(error);
        }
    }

    static async register(credentials: Omit<RegisterCredentials, "confirmPassword">): Promise<ApiResponse<unknown>> {
        try {
            const response = await axiosInstance.post("/register", credentials);
            console.log('resp', response);

            return response.status === 200 || response.status === 201
                ? { data: "Registration successful" }
                : { error: `Unexpected status code: ${response.status}` };
        } catch (error) {
            return this.handleError(error);
        }
    }

    static async getMe(bearerToken: string, signal?: AbortSignal): Promise<ApiResponse<UserProfile>> {
        if (!(await this.validateToken(bearerToken))) {
            return { error: "Invalid or expired token" };
        }

        try {
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
        try {
            const response = await axiosInstance.get<UserProfile>("/me", {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.status === 200;
        } catch {
            return false;
        }
    }

    private static formatResponse(response: AxiosResponse<IAuthResponse>): ApiResponse<IAuthResponse> {
        return { data: response.data };
    }

    public static handleError(error: unknown): ApiResponse<never> {
        if (isAxiosError(error)) {
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
