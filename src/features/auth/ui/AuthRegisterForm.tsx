'use client'
import { RegisterForm } from '@/shared/ui/components/Form/RegisterForm/RegisterForm';
import React, { FC } from 'react';
import { RegisterFormValues, useRegisterForm } from '../model/use-register-form';

type Props = {
    handleRegister: (values: RegisterFormValues) => void;
    error: string | undefined;
    data: string | undefined;
    isPending: boolean;
}

export const AuthRegisterForm: FC<Props> = ({ handleRegister, error, data, isPending }) => {
    const form = useRegisterForm();

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
