'use client'
import { LogoutForm } from '@/shared/ui'
import React, { FC } from 'react'
import { useLogout } from '../model/use-logout'


export const AuthLogoutForm: FC = () => {
    const { handleLogout } = useLogout()

    return (
        <LogoutForm
            onLogout={handleLogout}
        />
    )
}   