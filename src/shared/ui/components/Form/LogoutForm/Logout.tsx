'use client'
import React, { FC } from 'react'
import { Button } from '../../Button'

interface LogoutProps {
    onLogout: () => void
}

export const LogoutForm: FC<LogoutProps> = ({ onLogout }) => {
    return (
        <Button variant='outline' onClick={onLogout}>
            Logout
        </Button>
    )
}