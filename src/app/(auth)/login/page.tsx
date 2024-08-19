"use client"

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const { push } = useRouter()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const handleLogin = async (e: any) => {
        e.preventDefault();
        setError('')
        setIsLoading(true)

        // const email = e.currentTarget.email.value;
        // const password = e.currentTarget.password.value;

        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: e.target.email.value,
                password: e.target.password.value,
                callbackUrl: '/dashboard'
            })
            if (!res?.error) {
                e.target.reset()
                setIsLoading(false)
                push('/dashboard')
            } else {
                setIsLoading(false)
                console.log(res);
                if (res.status === 401) {
                    setError("Email or Password is Incorrect")
                }
            }
        } catch (err) {
            console.log(err);

        }
        // const response = await fetch('/api/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password,
        //     }),
        // });

        // if (response.ok) {
        //     const data = await response.json();
        //     console.log('Login successful:', data);
        // } else {
        //     console.error('Login failed');
        // }
    };

    // const handleLoginWithGoogle = () => {
    //     signIn('google', { callbackUrl: '/dashboard', redirect: false });
    // };

    // const handleLoginWithGoogle = () => {
    //     const callbackUrl = '/dashboard'; // atau bisa juga menggunakan current URL: window.location.href
    //     signIn('google', { callbackUrl, redirect: false });
    // };
    

    return (
        <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                {error !== '' && <div className="text-red-600 mb-3 font-bold text-center">{error}</div>}
                <form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
                    <h1 className="text-center text-2xl font-semibold text-gray-600">Login</h1>
                    <div>
                        <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
                        <input type="text" name="email" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-gray-600 font-semibold">Password</label>
                        <input type="password" name="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                    </div>
                    <button disabled={isLoading} type="submit" className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"> {isLoading ? "Loading ..." : "Log In"}</button>
                    <Link href='/register'>
                        <p className="mt-4 text-center">Register</p>
                    </Link>
                    <button type="button" className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide" onClick={() => signIn('google', {callbackUrl: `${process.env.NEXT_PUBLIC_API_URL}/dashboard`, redirect: false})}>Login with Google</button>
                </form>
            </div>
        </div>
    )
}
