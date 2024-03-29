import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh)] w-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center space-y-4">
        <p className="text-2xl font-bold text-blue-500">404</p>
        <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
        <p className="text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="flex items-center justify-center p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          <ArrowLeftIcon className="h-6 w-6 mr-2" />
          Go Back Home
        </Link>
      </div>

      <div className="hidden h-full w-full md:block relative">
        <Image src="/images/404.png" alt="404" fill className="absolute" />
      </div>
    </div>
  );
}
