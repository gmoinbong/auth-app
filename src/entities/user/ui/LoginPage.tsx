'use client'
import React, { FC } from 'react'
import { useLogin } from '../model/use-login'
import { AuthLoginForm } from '@/features/auth/ui'

export const LoginPage: FC = () => {
    const loginProps = useLogin()

    return (
        <AuthLoginForm {...loginProps} />
    )
}