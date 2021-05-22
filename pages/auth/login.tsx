import react, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface formData {
  name: string;
  email: string;
  password: string;
  password2: string;
}

function login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<formData>();

  const handleGoogle = () => {
    //Google sing in with Firebase
    try {
      //import your firebase app
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = ({ email, password, reset }) => {
    //Manage your field values
  };

  //Next js route redirection (if you are not using Nextjs delete it)
  /* const Router = useRouter();
  useEffect(() => {
    user && Router.replace("/");
  }, [user]); */

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xs w-full space-y-8 p-8 bg-white border-2">
        <div>
          <img
            className="mx-auto h-36 w-auto"
            src="/definitive.png"
            alt="Workflow"
          ></img>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true"></input>
          <div className="rounded-xs shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <section className="flex flex-row relative">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i,
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                ></input>
                {errors.email && (
                  <i
                    title="Enter a valid email"
                    className="fas fa-exclamation-circle absolute -right-6 inset-y-1/4 hover:text-red-500"
                  ></i>
                )}
              </section>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <section className="flex flex-row relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /[A-Za-z0-9_]{8,50}/,
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
                  placeholder="Password"
                ></input>
                {errors.password && (
                  <i
                    title="Password must have at least 8 characters and can't have symbols"
                    className="fas fa-exclamation-circle absolute -right-6 inset-y-1/4 hover:text-red-500"
                  ></i>
                )}
              </section>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative bg-blue-400 w-full h-7 flex justify-center py-2 px-4 text-sm font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 text-white"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3 text-white font-semibold"></span>
              Log in
            </button>
          </div>
        </form>
      </div>
      <div className="justify-between w-full h-16 flex items-center max-w-xs border-2 bg-white text-center mt-3">
        <div className="text-center w-full">
          Don't have an account yet?{" "}
          <Link href="/auth/register">
            <a className="text-blue-400"> Sign up </a>
          </Link>
        </div>
      </div>
      <div className="max-w-xs text-center mt-3">
        <span> Get the app.</span>
        <div className="flex flex-row justify-evenly mt-3">
          <img
            className="w-5/12"
            src="/app_store.png"
            alt="download from app store"
          ></img>
          <img
            className="w-5/12"
            src="/google_play.png"
            alt="download from google play"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default login;
