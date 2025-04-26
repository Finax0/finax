'use client'
import Header from "@/components/header";
import Link from "next/link";
import { useState } from "react";

export default function Login(){
    const [loading, setLoading] = useState(false);

    return(
        <div>
            <Header/>
            <div className="h-40"/>
            <div className="flex items-center justify-center bg-background text-primary">
                <form
                    className="bg-white p-8 rounded-2xl shadow-sm w-96"
                >
                    <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-lg bg-background text-primary"

                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-lg bg-background text-primary"

                            placeholder="Enter your password"
                        />
                    </div>


                    {/* Submit Button */}
                    <Link
                        href="/home"
                        type="submit"
                        className="w-full bg-[#2f2f2f] text-[#f5f5f5] font-bold p-2 rounded-lg hover:opacity-80 text-center justify-center flex items-center"
                    >
                        Sign In
                    </Link>

                    <div className="mt-3"><p className="text-center text-sm">You don't have an account? <Link href="/register" className="text-[#2f2f2f] font-bold ">Sign Up</Link></p></div>

                </form>
            </div>

        </div>
    )   
}