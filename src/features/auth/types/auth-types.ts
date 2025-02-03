export interface IAuthResponse {
    accessToken: string
}

export interface ErrorResponseData {
    message?: string;
    errors?: { msg: string }[];
}

export type AuthCredentials = {
    name: string
    username: string
    password: string
}

export type ApiResponse<T> = {
    data?: T;
    error?: string
}

export type UserProfile = {
    id: string;
    username: string;
}