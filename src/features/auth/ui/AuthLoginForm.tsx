'use client'
import { LoginForm } from '@/shared/ui'
import React, { FC } from 'react'
import { useLoginForm } from '../model/use-login-form'
import { useLogin } from '../model/use-login'

export const AuthLoginForm: FC = () => {
    const form = useLoginForm()
    const { isPending, handleLogin, error } = useLogin()

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