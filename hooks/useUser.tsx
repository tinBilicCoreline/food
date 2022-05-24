import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { logInWithEmail, signUpWithEmail } from "../api/api";
import { loginStateAtom } from "../state/state";

export const useUser = () => {
  const [, setLoginState] = useRecoilState(loginStateAtom);

  const { mutateAsync: login } = useMutation(
    ({ email, password }: { email: string; password: string }) =>
      logInWithEmail({ email, password }),
    {
      onSuccess: async ({ loginWithEmail }) => {
        setLoginState({
          token: loginWithEmail.accessToken,
          user: loginWithEmail.user,
        });
      },
    }
  );

  const { mutateAsync: register } = useMutation(
    ({
      email,
      password,
      name,
    }: {
      email: string;
      password: string;
      name: string;
    }) => signUpWithEmail({ email, password, name }),
    {
      onSuccess: async ({ signUpWithEmail }) => {
        setLoginState({
          token: signUpWithEmail.accessToken,
          user: signUpWithEmail.user,
        });
      },
    }
  );

  return {
    login,
    register,
  };
};
