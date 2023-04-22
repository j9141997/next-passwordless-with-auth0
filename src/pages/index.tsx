import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

const Home: NextPage = () => {
  const router = useRouter();
  const { user, error, isLoading, checkSession } = useAuth();

  if (!isLoading && user != null) {
    router.push("/profile");
    return null;
  }

  return (
    <main>
      <Head>
        <title>Passwordless Application with Auth0</title>
      </Head>
      <section>
        <a href="api/auth/login">Log In</a>
        <a href="api/auth/login">register</a>
      </section>
    </main>
  );
};

export default Home;
