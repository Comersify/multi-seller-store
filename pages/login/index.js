import Head from "next/head";
import { LoginForm } from "./LoginForm";

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
