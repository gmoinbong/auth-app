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
import { RegisterFormValues } from '@/features/auth/hooks/use-register-form'
import Link from 'next/link'

type RegisterFormProps = {
    form: UseFormReturn<RegisterFormValues>
    onSubmit: (values: RegisterFormValues) => void;
    isPending?: boolean;
}

export const RegisterForm = ({ form, onSubmit, isPending }: RegisterFormProps) => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <Form  {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-8 bg-gray-300  dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input className='border-blue-300' placeholder="Enter your name" {...field} />
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
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel >Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Confirm your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='w-full' variant="default">
                        {isPending ? 'Submitting...' : 'Submit'}
                    </Button>
                    <div className="flex justify-center items-center space-x-2 ">
                        <p>Already have an account?</p>
                        <Link className='m-0 ' href="/login" >Login</Link>
                    </div>
                </form>
            </Form>
        </div>
    )
}