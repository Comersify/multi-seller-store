import Link from "next/link";
import { Input } from "@/forms/Input";
import { Title } from "@/components/shared/Title";

export const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[40rem]">
      <Title text="Login" emoji="&#x1F512;" />
      <form className="w-full mt-4 p-8 max-w-sm border rounded-lg border-gray-200">
        <div className="mb-4">
          <Input label="Username" type="text" placeholder="username" />
        </div>
        <div className="mb-6">
          <Input label="Password" type="password" placeholder="Password" />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <Link
            className="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
      <p className="text-gray-900 mt-4">
        You don't have an account
        <a
          className="px-2 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="/signup"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
};
