import { Session } from "next-auth";
import Link from "next/link";

type NavbarProps = {
  session: Session | null;
};

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-sky-500">
      <h1 className="flex-1 text-2xl font-bold">App Servicios</h1>
      <div className="flex flex-wrap items-center">
        {!session?.user ? (
          <>
            <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
              Home
            </Link>
            <Link
              href="/auth/login"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="block mt-4 lg:inline-block lg:mt-0"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/dashboard"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Dashboard
            </Link>
            <Link
              href="/api/auth/signout"
              className="block mt-4 lg:inline-block lg:mt-0"
            >
              Logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
