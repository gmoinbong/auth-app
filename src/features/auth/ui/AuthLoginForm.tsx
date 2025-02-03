'use client'
import { LoginForm } from '@/shared/ui'
import React, { FC } from 'react'
import { LoginFormValues, useLoginForm } from '../model/use-login-form'
import { useLoginFormStore } from '../model/store/login-form'
import { AuthService } from '../api/auth-api'

export const AuthLoginForm: FC = () => {
    const form = useLoginForm()
    const { setPending, isPending } = useLoginFormStore()

    const onSubmit = async (values: LoginFormValues) => {
        try {
            setPending(true)
            const result = await AuthService.login(values)
            console.log(result);
        } catch (error) {
            console.log(error);
        } finally {
            setPending(false)
        }
    }

    return (
        <LoginForm form={form} onSubmit={onSubmit} isPending={isPending} />
    )
}