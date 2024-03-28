import { useForm } from "react-hook-form";

type LoginFormProps = {
  onSubmit: (data: any) => void;
  error: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Iniciar sesión</h1>
      {error && <p className="text-red-500 text-xs">{error}</p>}

      <form
        className="flex flex-col space-y-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          title="email"
          placeholder="nombre@example.com"
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
          placeholder="********"
          className="border-2 border-gray-300 pl-1"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">Este campo es requerido</span>
        )}

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
