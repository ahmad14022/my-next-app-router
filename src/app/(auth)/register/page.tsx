"use client"

import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
    const { push } = useRouter()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError("")
        setIsLoading(true)
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                // bind to name in input element
                fullname: e.target.fullname.value,
                email: e.target.email.value,
                password: e.target.password.value,
            })
        })
        if (res.status === 200) {
            e.target.reset()
            setIsLoading(false)
            push('/login')
        } else {
            setError('Email Already Exist')
            setIsLoading(false)
        }

    }
    return (
        <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            {error !== '' && <div className="text-red-600 mb-3 font-bold text-center">{error}</div>}
                <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
                    <h1 className="text-center text-2xl font-semibold text-gray-600">Register</h1>
                    <div>
                        <label htmlFor="fullname" className="block mb-1 text-gray-600 font-semibold">Fullnmae</label>
                        <input type="text" name="fullname" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
                        <input type="text" name="email" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-gray-600 font-semibold">Password</label>
                        <input type="password" name="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                    </div>
                    <button disabled={isLoading} type="submit" className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
                        {isLoading ? "Loading ..." : "Sign Up"}
                    </button>
                    <Link href='/login'>
                        Sign in here
                    </Link>
                </form>
            </div>
        </div>
    )
}