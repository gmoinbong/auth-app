'use client'
import { LogoutForm } from '@/shared/ui'
import React, { FC } from 'react'

type Props = {
    handleLogout: () => Promise<void>
}

export const AuthLogoutForm: FC<Props> = ({ handleLogout }) => {

    return (
        <LogoutForm
            onLogout={handleLogout}
        />
    )
}   