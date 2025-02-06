'use client'
import { LoginForm } from '@/shared/ui'
import React, { FC } from 'react'
import { LoginFormValues, useLoginForm } from '../hooks/use-login-form';


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
                error={error}
            />

        </div>
    )
}