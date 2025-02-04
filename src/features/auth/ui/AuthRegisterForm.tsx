'use client'
import { RegisterForm } from '@/shared/ui/components/Form/RegisterForm/RegisterForm';
import React, { FC } from 'react';
import { useRegisterForm } from '../model/use-register-form';
import { useRegister } from '../model/use-register';
import { redirect } from 'next/navigation';

export const AuthRegisterForm: FC = () => {
    const form = useRegisterForm();
    const { isPending, handleRegister, error, data } = useRegister();

    if (data) {
        setTimeout(() =>
            redirect('/api/auth/login'),
            3000)
    }

    return (
        <div className="space-y-4">
            <RegisterForm form={form} onSubmit={handleRegister} isPending={isPending} />
            {error && (
                <div className="text-red-500 text-sm mt-2 p-2 bg-red-50 rounded-md">
                    {error}
                </div>)}
            {data && (
                <div className=' bg-green-50 rounded-md'>
                    <p className='text-green-500 text-sm mt-2 p-2'>{data}</p>
                </div>)}
        </div>
    );
};
