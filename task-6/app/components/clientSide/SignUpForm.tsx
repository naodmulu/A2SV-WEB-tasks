"use client";
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SignUpFormTypes from '@/app/types/SignUpForm_types';
import Link from 'next/link';
import axios, { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';

// Define validation schema using Yup
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Please enter a valid email address').required('Email Address is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const SignUpForm = () => {
    const { register, control, handleSubmit, watch, formState: { errors }, trigger } = useForm<SignUpFormTypes>({
        resolver: yupResolver(schema)
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Watch password field to dynamically validate confirmPassword
    const password = watch("password", "");

    useEffect(() => {
        // revalidate confirmPassword whenever password changes
        trigger("confirmPassword");
    }, [password, trigger]);

    const onSubmit = async (data: SignUpFormTypes) => {
        localStorage.setItem("userEmail", data.email);
        const formData = JSON.stringify({ ...data, role: "user" });
        console.log(formData);
        setLoading(true);
        try {
            const response = await axios.post(
                "https://akil-backend.onrender.com/signup",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setLoading(false);
            router.push("/verify_email");

            if (response.status === 200) {
                console.log("Success");
            }
        } catch (err) {
            setLoading(false);
            if (isAxiosError(err) && err.response) {
                console.log(err.response.data.message);
                setError(err.response.data.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <label className="flex justify-between text-base font-serif font-semibold text-[#515B6F]" htmlFor="name">
                        Full Name
                        <span className="text-red-300 text-sm">{errors.name?.message}</span>
                    </label>
                    <input 
                        className="rounded-md px-4 py-3 text-[#A8ADB7] font-normal text-base border-[1px] border-[#D6DDEB] mb-2"
                        placeholder="Enter your Full Name"
                        id="name" 
                        {...register("name")}
                        type="text" 
                    />
                </div>

                <div className="flex flex-col">
                    <label className="flex justify-between text-base font-serif font-semibold text-[#515B6F]" htmlFor="email">
                        Email Address
                        <span className="text-red-300 text-sm">{errors.email?.message}</span>
                    </label>
                    <input 
                        className="p-1 rounded-md px-4 py-3 text-[#A8ADB7] font-normal text-base border-[1px] border-[#D6DDEB] mb-2"
                        placeholder="Enter Email Address"
                        id="email" 
                        {...register("email")}
                        type="email"
                    />
                </div>
                
                <div className="flex flex-col">
                    <label className="flex justify-between text-base font-serif font-semibold text-[#515B6F]" htmlFor="password">
                        Password
                        <span className="text-red-300 text-sm">{errors.password?.message}</span>
                    </label>
                    <input 
                        className="p-1 rounded-md px-4 py-3 text-[#A8ADB7] font-normal text-base border-[1px] border-[#D6DDEB] mb-2"
                        placeholder="Enter Password"
                        id="password" 
                        {...register("password")}
                        type="password"
                    />
                </div>
                
                <div className="flex flex-col">
                    <label className="flex justify-between text-base font-serif font-semibold text-[#515B6F]" htmlFor="confirmPassword">
                        Confirm Password
                        <span className="text-red-300 text-sm">{errors.confirmPassword?.message}</span>
                    </label>
                    <input 
                        className="p-1 rounded-md px-4 py-3 text-[#A8ADB7] font-normal text-base border-[1px] border-[#D6DDEB] mb-2"
                        placeholder="Enter Password"
                        id="confirmPassword" 
                        {...register("confirmPassword")}
                        type="password"
                    />
                </div>
                
                <div>
                    <button 
                        type='submit' 
                        className='w-full mt-5 px-6 py-3 bg-[#4640DE] rounded-2xl text-white font-semibold text-center'
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Continue"}
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <p className="mt-3">Already have an account?&nbsp; 
                        <Link key={"signin"} href={`/sign_in`} passHref>
                            <span className='ml-2 font-bold font-serif text-[#4640DE]'>
                                Login
                            </span>
                        </Link>
                    </p>
                    <p className="mt-3 w-[408px] font-light text-sm">By clicking 'Continue', you acknowledge that you have read and accept the<span className='ml-2 font-bold font-serif text-[#4640DE]'>Terms of Service</span> and<span className='ml-2 font-bold font-serif text-[#4640DE]'>Privacy Policy</span>.</p>
                </div>
            </form>

            <DevTool control={control} />
        </div>
    );
};

export default SignUpForm;
