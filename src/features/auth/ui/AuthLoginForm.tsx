'use client'
import { LoginForm } from '@/shared/ui'
import React, { FC } from 'react'
import { LoginFormValues, useLoginForm } from '../model/use-login-form'


type Props = {
    handleLogin: (values: LoginFormValues) => void;
    isPending?: boolean;
    error: string | undefined;
}

export const AuthLoginForm: FC<Props> = ({ handleLogin, isPending, error }) => {
    const form = useLoginForm()

    return (
        <div className="space-y-4">
            <LoginForm
                form={form}
                onSubmit={handleLogin}
                isPending={isPending}
            />
            {error && (
                <div className="text-red-500 text-sm mt-2 p-2 bg-red-50 rounded-md">
                    {error}
                </div>
            )}
        </div>
    )
}