"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginForm from "./LoginForm";

const LoginContainer: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data: any) => {
    const response = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (response?.error) {
      setError(response.error);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return <LoginForm onSubmit={onSubmit} error={error} />;
};

export default LoginContainer;
