"use client"
import { AuthService } from "../api/auth-api";
import { ApiResponse } from "../../../features/auth/types/auth-types";
import { useState, useEffect } from "react";

type UserData = {
    id?: string;
    username?: string;
};

export const useFetchUser = (token: string | null) => {
    const [userData, setUserData] = useState<UserData>({
        id: undefined,
        username: undefined,
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (!token) return;
            try {
                const result: ApiResponse<{
                    id: string;
                    username: string;
                }> = await AuthService.getMe(token);

                if (result.data) {
                    setUserData({
                        id: result.data.id,
                        username: result.data.username,
                    });
                } else {
                    setError("No data returned");
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            }

        };

        fetchUser();
    }, [token]);

    return {
        userData,
        error,
        isLoading: !userData.id && !error
    };
};