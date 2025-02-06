"use client"
import { Profile } from '@/shared/ui';
import React, { FC } from 'react';
import { useFetchUser } from '../model/use-fetch-user';

interface UserProps {
    token: string | null;
}

export const UserPage: FC<UserProps> = ({ token }) => {
    const { userData, isLoading, error } = useFetchUser(token);

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    return (
        <Profile
            id={userData.id}
            username={userData.username}
        />
    );
};