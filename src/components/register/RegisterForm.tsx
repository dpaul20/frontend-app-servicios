import { useForm } from "react-hook-form";

type RegisterFormProps = {
  onSubmit: (data: any) => void;
  error: string;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Crear nueva cuenta</h1>
      {error && <p className="text-red-500 text-xs">{error}</p>}

      <form
        className="flex flex-col space-y-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-sm" htmlFor="firstName">
          Nombre
        </label>
        <input
          title="firstName"
          placeholder="Nombre"
          className="border-2 border-gray-300 pl-1"
          type="text"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span className="text-red-500 text-xs">Este campo es requerido</span>
        )}
        <label className="text-sm" htmlFor="lastName">
          Apellido
        </label>
        <input
          title="lastName"
          placeholder="Apellido"
          className="border-2 border-gray-300 pl-1"
          type="text"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className="text-red-500 text-xs">Este campo es requerido</span>
        )}
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          title="email"
          placeholder="Email"
          className="border-2 border-gray-300 pl-1"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">Este campo es requerido</span>
        )}
        <label className="text-sm" htmlFor="password">
          Contraseña
        </label>
        <input
          title="password"
          placeholder="Contraseña"
          className="border-2 border-gray-300 pl-1"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">Este campo es requerido</span>
        )}
        <label className="text-sm" htmlFor="repeat-password">
          Repita la contraseña
        </label>
        <input
          title="confirmPassword"
          placeholder="Repita la contraseña"
          className="border-2 border-gray-300 pl-1"
          type="password"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">Este campo es requerido</span>
        )}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
