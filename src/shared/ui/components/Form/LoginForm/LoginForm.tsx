'use client'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/shared/ui/components/Form/Form'
import { Input } from '@/shared/ui/components/Input/Input'
import { Button } from '../../Button/Button'
import { UseFormReturn } from 'react-hook-form'
import { LoginFormValues } from '@/features/auth/hooks/use-login-form'
import Link from 'next/link'

type LoginFormProps = {
    form: UseFormReturn<LoginFormValues>
    onSubmit: (values: LoginFormValues) => void
    isPending?: boolean
    error: string;
}

export const LoginForm = ({ form, onSubmit, isPending, error }: LoginFormProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full max-w-md space-y-8 bg-gray-300  dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isPending}
                    >
                        {isPending ? 'Submitting...' : 'Login'}
                    </Button>
                    <div className="flex justify-center items-center space-x-2 ">
                        <p>Dont have an account?</p>
                        <Link className='m-0' href="/register" >Register</Link>
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm mt-2 p-2 bg-red-50 rounded-md">
                            {error}
                        </div>
                    )}
                </form>
            </Form>
        </div>
    )
}