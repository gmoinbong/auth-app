import { useRouter } from "next/navigation";
import { useLoginFormStore } from "./store/login-form-store";
import { LoginFormValues } from "@/features/auth/hooks/use-login-form";

export const useLogin = () => {
    const { isPending, setPending, setError } = useLoginFormStore();
    const router = useRouter()


    const handleLogin = async (values: LoginFormValues) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Login failed');
            }

            router.push('/');
            return { data: result };
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "Unknown error";
            setError(errorMessage);
            return { error: errorMessage };
        } finally {
            setPending(false);
        }
    };

    return {
        handleLogin,
        isPending,
        error: useLoginFormStore((state) => state.error),

    };
};