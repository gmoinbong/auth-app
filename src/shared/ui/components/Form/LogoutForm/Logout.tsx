'use client'
import React, { FC } from 'react'
import { Button } from '../../Button'

interface LogoutProps {
    onLogout: () => void
}

export const LogoutForm: FC<LogoutProps> = ({ onLogout }) => {
    return (
        <Button variant='default' className='w-16' onClick={onLogout}>
            Logout
        </Button>
    )
}