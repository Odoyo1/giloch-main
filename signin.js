import { getProviders, signIn } from "next-auth/react";

export default function Signin({ providers }) {
  return (
    <div className="md:max-w-2xl mx-auto p-5" align="center">
      <img src="/logo.png" className="w-[100px]" alt="image" />

      <span className="text-sm">
        Welcome to Giloch Log In with your Google Account to create an account
        with us.
      </span>

      <div className="mt-3">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}