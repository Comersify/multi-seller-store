import { Title } from "@/components/Title";
import Head from "next/head";
import { LoginForm } from "@/forms/LoginForm";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </>
  );
}
