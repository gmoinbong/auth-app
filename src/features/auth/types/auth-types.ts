export interface IAuthResponse {
    accessToken: string
}

export interface ErrorResponseData {
    message?: string;
    errors?: { msg: string }[];
}

export type LoginCredentials = {
    name: string
    username: string
    password: string
}

export type RegisterCredentials = {
    name: string
    username: string
    password: string
    confirmPassword: string;
}

export type ApiResponse<T> = {
    data?: T | null;
    error?: string
}

export type UserProfile = {
    id: string;
    username: string;
}