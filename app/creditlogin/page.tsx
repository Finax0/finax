'use client'
import Header from "@/components/header"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Creditlogin(){

    const [loading, setLoading] = useState(false);


    return(
        <div>

            <Header/>
            <div className="h-40"/>
            <div className="flex items-center justify-center bg-background text-primary">
                <form
                    className="bg-white p-8 rounded-2xl shadow-sm w-96"
                >
                    <h2 className="text-xl font-bold mb-4 text-center">Kredi/Banka Kartını Bağla</h2>
                    
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="block text-sm mb-1">Ad</label>
                            <input
                            type="text"
                            className="w-full p-2 border rounded-lg bg-background text-primary"
                            placeholder="Adınızı girin"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm mb-1">Soyad</label>
                            <input
                            type="text"
                            className="w-full p-2 border rounded-lg bg-background text-primary"
                            placeholder="Soyadınızı girin"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm mb-1">Kart Numarası</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg bg-background text-primary"
                            placeholder="Kart numaranızı girin"
                        />
                    </div>

                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="block text-sm mb-1">CVV</label>
                            <input
                            type="text"
                            className="w-full p-2 border rounded-lg bg-background text-primary"
                            placeholder="CVV'yi girin"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm mb-1">Son kullanma tarihi</label>
                            <input
                            type="text"
                            className="w-full p-2 border rounded-lg bg-background text-primary"
                            placeholder="Kart son kullanma tarihini girin"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                    <Link
                        href="/home"
                        type="submit"
                        className="w-full bg-[#2f2f2f] text-[#f5f5f5] font-bold p-2 rounded-lg hover:opacity-80 text-center"
                    >
                        Onayla
                    </Link>
                    </div>
                    <div className="flex flex-row gap-x-8 my-8 justify-center items-center">
                        <Image src="/icons/mastercard-logo.svg" alt="Mastercard" width={40} height={50} />
                        <Image src="/icons/visa.svg" alt="Visa" width={40} height={50}/>
                        <Image src="/icons/google-pay.svg" alt="Googlepay" width={40} height={50}/>
                    </div>
                </form>
            </div>
        </div>
    );
}