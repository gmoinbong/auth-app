import { AxiosResponse, isAxiosError } from "axios";
import { axiosInstance } from "@/shared/api/instance";
import {
    ApiResponse,
    AuthCredentials,
    IAuthResponse,
    UserProfile,
    ErrorResponseData,
} from "../types/auth-types";

export class AuthService {
    static async login(
        credentials: AuthCredentials
    ): Promise<ApiResponse<IAuthResponse>> {
        try {
            const response = await axiosInstance.post<IAuthResponse>(
                "/login",
                credentials
            );
            return this.formatResponse(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    static async register(
        credentials: AuthCredentials
    ): Promise<ApiResponse<IAuthResponse>> {
        try {
            const response = await axiosInstance.post<IAuthResponse>(
                "/register",
                credentials
            );
            return this.formatResponse(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    static async getMe(
        bearerToken: string,
        signal?: AbortSignal
    ): Promise<ApiResponse<UserProfile>> {
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

    private static formatResponse(
        response: AxiosResponse<IAuthResponse>
    ): ApiResponse<IAuthResponse> {
        return { data: response.data };
    }

    private static handleError(error: unknown): ApiResponse<never> {
        if (isAxiosError(error)) {
            if (error.code === "ERR_CANCELED") {
                return { error: "Request was canceled" };
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