"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const loginFormSchema = z.object({
    name: z.string()
        .min(2, { message: "Name must be at least 2 characters long" })
        .max(40, { message: "Name must be at most 40 characters long" })
        .regex(/^[a-zA-Z]+$/, { message: "Name must contain only letters (a-z, A-Z)" }),

    username: z.string()
        .min(2, { message: "Username must be at least 2 characters long" })
        .max(40, { message: "Username must be at most 40 characters long" })
        .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" }),

    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(50, { message: "Password must be at most 50 characters long" })
        .regex(/^(?=.*[a-zA-Z])(?=.*\d).+$/, { message: "Password must include at least 1 digit and 1 letter" }),

})

export type LoginFormValues = z.infer<typeof loginFormSchema>

export const useLoginForm = () => {
    return useForm<LoginFormValues>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            name: "",
            username: "",
            password: ""
        },
    })
}

