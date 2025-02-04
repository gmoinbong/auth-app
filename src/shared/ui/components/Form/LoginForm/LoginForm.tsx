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
import { LoginFormValues } from '@/features/auth/model/use-login-form'
import { UseFormReturn } from 'react-hook-form'

type LoginFormProps = {
    form: UseFormReturn<LoginFormValues>
    onSubmit: (values: LoginFormValues) => void
    isPending?: boolean
}

export const LoginForm = ({ form, onSubmit, isPending }: LoginFormProps) => {

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <Button type="submit">
                    {isPending ? 'Submitting...' : 'Submit'}
                </Button>
            </form>
        </Form>
    )
}