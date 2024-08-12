"use client";

import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormValues {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    setLoading(true)
    if (result?.error) {
      setError(result.error);
      setLoading(false)
    } else {
        console.log("successful")
        setLoading(false)
        router.push("/");  // Redirect to homepage on successful login
    }
  };

  return (
    <div className="max-w-[408px] min-w-72 p-4 left-[792px] top-[141px] relative bg-[#fafafa] rounded-lg">
      <div className='flex justify-center'>
        <h1 className='min-w-[408px] p-1 pb-1 mb-4 mt-1 text-[#25324B] font-black text-4xl text-center'>
          Welcome Back,
        </h1>
      </div>
      <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-3 flex flex-col">
          <label className='mb-1' htmlFor="email">
            Email Address
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            placeholder='Enter email Address'
            id="email"
            className='h-8 py-1 px-2 border-[1px] border-gray-400 rounded-lg'
            type="email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="mt-3 flex flex-col">
          <label className='mb-1' htmlFor="password">
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            placeholder='Enter password'
            id="password"
            className='h-8 py-1 px-2 border-[1px] border-gray-400 rounded-lg'
            type="password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="px-6 py-3 mt-3 flex flex-col bg-[#4640DE] rounded-xl">
          <button type='submit'>
          {loading ? 'Loading...' : 'Login'}
          </button>
          {error && <p>{error}</p>}
        </div>
      </form>

      <div className='mt-3 py-1'>
        <p className='text-base font-serif font-thin text-[#202430]'>Don't have an account?
          <Link key="SignUp" href={`/sign_up`} passHref>
            <span className='ml-2 font-bold font-serif text-[#4640DE]'>
              SignUp
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
