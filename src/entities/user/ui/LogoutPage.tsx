"use client"
import { AuthLogoutForm } from '@/features/auth/ui'
import React, { FC } from 'react'
import { useLogout } from '../model/use-logout'

export const LogoutPage: FC = () => {
    const handleLogout = useLogout()

    return (
        <AuthLogoutForm {...handleLogout} />
    )
}