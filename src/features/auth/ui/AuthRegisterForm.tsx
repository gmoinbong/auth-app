"use client"
import { RegisterForm } from '@/shared/ui/components/Form/RegisterForm/RegisterForm'
import React, { FC } from 'react'
import { RegisterFormValues, useRegisterForm } from '../model/use-register-form'
import { useRegisterFormStore } from '../model/store/register-form'
import { AuthService } from '../api/auth-api'

export const AuthRegisterForm: FC = () => {
    const form = useRegisterForm()
    const { isPending, setPending } = useRegisterFormStore()

    const onSubmit = async (values: RegisterFormValues) => {
        try {
            setPending(true)
            console.log(values);
            const result = await AuthService.register(values)
            console.log(result);
        } catch (error) {
            console.log(error);
        } finally {
            setPending(false)
        }
    }

    return (
        <RegisterForm onSubmit={onSubmit} isPending={isPending} form={form} />
    )
}