"use client";
import { useState } from "react";
import Header from "@/components/header";
import Link from "next/link";
import Globe from "@/public/icons/globe.svg"


export default function signUp() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string | null>>({});
    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
    })

    const validateField = (name: string, value: string): string | null => {
        // function titleCase(s: string) {
        //     return s.toLowerCase()
        //         .split(' ')
        //         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        //         .join(' ');
        // }

        if (name === 'email') {
            if (value.startsWith("0")) value = value.substring(1); // Remove leading 0

            if (
                !/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(value) &&
                !/^\d{10,15}$/.test(value) &&
                !/^\d+$/.test(value)
            ) return "You can just sign in with email or phone number.";
        }

        if (name === 'password') {
            if (value.includes(" ")) return "Password cannot contain spaces";
        }

        return null;
    };

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, type, value } = target;

        // maybe we can us this for remember me.
        const newValue = type === "checkbox" ? target.checked : value;

        setFormData((prev) => ({
            ...prev,
            [name]: newValue,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, String(newValue)),
        }));
    };

    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();
    //
    //     setLoading(true);
    //     setError(null);
    //
    //     // Simulating a login process
    //     try {
    //         if (!email || !password) {
    //             setError("Both fields are required!");
    //             return;
    //         }
    //
    //         console.log("Signing in...", { email, password });
    //
    //         // Simulate API call
    //         await new Promise((resolve) => setTimeout(resolve, 1500));
    //
    //         alert("Signed in successfully!");
    //     } catch (err) {
    //         setError("An error occurred. Please try again.");
    //         console.error(err);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <div>

            <Header />

            <div className="h-40"/>
            <div className="flex items-center justify-center bg-background text-primary">
                <form
                    className="bg-white p-8 rounded-2xl shadow-sm w-96"
                >
                    <Link href="/creditlogin" className=""><h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2></Link>
                    
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="block text-sm mb-1">Name</label>
                            <input
                            type="text"
                            className="w-full p-2 border rounded-lg bg-background text-primary"
                            placeholder="Enter name"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm mb-1">Surname</label>
                            <input
                            type="text"
                            className="w-full p-2 border rounded-lg bg-background text-primary"
                            placeholder="Enter surname"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-lg bg-background text-primary"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-lg bg-background text-primary"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                        />
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}


                    {/* Submit Button */}
                    <Link
                        href="/creditlogin"
                        type="submit"
                        className="w-full bg-[#2f2f2f] text-[#f5f5f5] font-bold p-2 rounded-lg hover:opacity-80 text-center flex items-center justify-center"
                    >
                        Sign Up
                    </Link>

                    <div className="flex flex-row my-8 justify-center items-center">
                        <button >
                            <img src={Globe.src} alt="Globe" className="w-5 h-5 absolute top-2 right-2 cursor-pointer"/>
                        </button>
                        <button >
                            <img src={Globe.src} alt="Globe" className="w-5 h-5 absolute top-2 right-2 cursor-pointer"/>
                        </button>
                    </div>

                </form>
            </div>
        </div>

    );
}

