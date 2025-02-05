'use client'
import React, { FC } from 'react'
import { useLogin } from '../../../entities/user/model/use-login'
import { AuthLoginForm } from '@/features/auth/ui'

export const Login: FC = () => {
    const loginProps = useLogin()

    return (
        <AuthLoginForm {...loginProps} />
    )
}