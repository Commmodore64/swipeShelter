// Types
import type { GetServerSideProps, NextPage } from "next";

// Utils
import Head from "next/head";

// Components
import LoginComponent from "~/components/auth/login";
import { getServerAuthSession } from "~/server/auth";

interface Session {
  user: {
    name: string;
    email: string;
    image: string | null;
    // Puedes agregar más propiedades según las necesidades de tu aplicación
  };
}

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginComponent />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  if (session && typeof session === "object" && !Array.isArray(session)) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: { session: session ? ({ ...session } as Session) : null },
  };
};

export default Login;
