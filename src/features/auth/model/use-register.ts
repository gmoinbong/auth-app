import { AuthService } from "../api/auth-api";
import { ApiResponse } from "../types/auth-types";
import { useRegisterFormStore } from "./store/register-form";
import { RegisterFormValues } from "./use-register-form";

export const useRegister = () => {
    const { isPending, setPending, setError, setData } = useRegisterFormStore();

    const handleRegister = async (values: RegisterFormValues) => {
        setError(undefined);
        setData(undefined);
        setPending(true);
        const { confirmPassword, ...registrationData } = values;

        try {
            const result: ApiResponse<unknown> = await AuthService.register(registrationData);

            if (result.error) {
                setError(result.error);
            } else {
                setData(result.data);
            }

            return result.data;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            setError(errorMessage);

            return { error: errorMessage };
        } finally {
            setPending(false);
        }
    };

    return {
        isPending,
        handleRegister,
        error: useRegisterFormStore(state => state.error),
        data: useRegisterFormStore(state => state.data)
    };
};
