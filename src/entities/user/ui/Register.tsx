"use client"
import React, { FC } from 'react'
import { redirect } from 'next/navigation';
import { AuthRegisterForm } from '@/features/auth/ui'
import { useRegister } from '../model/use-register';

export const Register: FC = () => {
    const registerProps = useRegister();

    if (registerProps.data) {
        setTimeout(() =>
            redirect('/api/auth/login'),
            3000)
    }

    return (
        <AuthRegisterForm {...registerProps} />
    )
}