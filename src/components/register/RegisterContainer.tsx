"use client";
import { useState } from "react";
import bcrypt from "bcryptjs";
import RegisterForm from "./RegisterForm";
import { useRouter } from "next/navigation";
import { registerUser } from "@/libs/api/signup";

interface dataProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterContainer: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data: dataProps) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const response = await registerUser(data);

    if (response.ok) {
      router.push("/auth/login");
    }
    if (response.status === 409) {
      setError("El usuario ya existe");
    }
  };

  return <RegisterForm onSubmit={onSubmit} error={error} />;
};

export default RegisterContainer;
