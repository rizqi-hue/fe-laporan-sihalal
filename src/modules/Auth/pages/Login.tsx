import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  ButtonPrimary,
  Input,
  svg_facebook,
  svg_google,
  svg_twitter,
} from "../../../components";

export interface PageLoginProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Lanjutkan dengan Facebook",
    href: "#",
    icon: svg_facebook,
  },
  {
    name: "Lanjutkan dengan Twitter",
    href: "#",
    icon: svg_twitter,
  },
  {
    name: "Lanjutkan dengan Google",
    href: "#",
    icon: svg_google,
  },
];

const Login: FC<PageLoginProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login || Yu masuk</title>
      </Helmet>
      <div className="h-screen flex">
        <div
          className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center"
        >
          <div
            className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
          ></div>
          <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 className="text-white font-bold text-4xl font-sans">
              Simple App
            </h1>
            <p className="text-white mt-1">The simplest app to use</p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                href="#"
                className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Hello Again!
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-8">
                Welcome Back
              </p>
              <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <Input
                  type="email"
                  placeholder="example@example.com"
                  className="mt-1"
                />
              </div>
              <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 w-full outline-none border-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <ButtonPrimary className="w-full" type="submit">
                Continue
              </ButtonPrimary>
              <div className="flex justify-between mt-4">
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                  Forgot Password ?
                </span>

                <a
                  href="#"
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                >
                  Don't have an account yet?
                </a>
              </div>
              <div className="grid gap-3">
                {loginSocials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
                  >
                    <img
                      className="flex-shrink-0"
                      src={item.icon}
                      alt={item.name}
                    />
                    <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                      {item.name}
                    </h3>
                  </a>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link to="/forgot-pass" className="text-sm text-green-600">
                  Forgot password?
                </Link>
              </span>
              <Input type="password" className="mt-1" />
            </label>
            <ButtonPrimary type="submit">Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link className="text-green-600" to="/signup">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
