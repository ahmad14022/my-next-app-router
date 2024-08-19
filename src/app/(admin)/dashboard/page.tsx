// komponen client di render di client, kalau ada hook pakai use client, tidak bisa di sisi server
"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function DashboardPage() {
    const { data: session, status }: { data: any, status: string } = useSession()
    console.log(session);
    console.log(status);
    const router = useRouter()
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        } else {
            if (session !== undefined && session?.user.role != 'admin') {
                router.push('/')
            }
        }
    }, [router, session, session?.user.role, status])
    return (
        <div className="w-full h-96 bg-gray-300 flex justify-center items-center rounded-md">
            <h1>Dashboard</h1>
        </div>
    )
}