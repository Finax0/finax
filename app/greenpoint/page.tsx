'use client'
import { useState } from "react";
import Leaf from "@/public/icons/leaf.svg";
import { MessageCircleQuestionIcon, Plus } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Greenpoint() {
    const [showInfo, setShowInfo] = useState(false);
    const [howtoDo, sethowtoDo] = useState(false);
    const [productInfo, setproductInfo] = useState(false);

    return (
        <main>
            <div className="h-20" />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center rounded-lg"
            >
                <section className="rounded-lg flex flex-col max-w-72 items-center justify-center border p-4">

                    {/* Soru işareti */}
                    <MessageCircleQuestionIcon
                        color="#8ec291"
                        className="w-5 h-5 flex self-end cursor-pointer"
                        onClick={() => setShowInfo(true)}
                    />

                    {/* Popup Bilgi Kutusu */}
                    {showInfo && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >

                            <div
                                className="fixed inset-0 bg-black/50 z-40"
                                onClick={() => setShowInfo(false)}
                            />
                            <div className="fixed transition-all -translate-x-1/2 -translate-y-1/2 bg-white border p-6 rounded-lg shadow-lg z-50 w-80 text-center">
                                <p className="text-sm mb-4">
                                    🌿 Green Points, çevreci aktiviteler yaparak kazandığınız puanlardır.
                                </p>
                                <Plus
                                    className="absolute top-2 right-2 rotate-45 cursor-pointer"
                                    onClick={() => setShowInfo(false)}
                                />
                            </div>
                        </motion.div>
                    )}

                    <div className="font-bold border-b-2 w-60 pb-2 text-center">
                        Yeşil Puanlarım
                    </div>

                    <div className="flex items-center justify-center mt-2 space-x-2">
                        <div className="font-semibold text-lg text-center">4532</div>
                        <Image src={Leaf.src} alt="Leaf Icon" width={20} height={20} />
                    </div>

                    <div
                        className="mt-3 text-sm cursor-pointer"
                        onClick={() => sethowtoDo(true)}
                    >
                        Nasıl kazanılır?
                    </div>

                    {/* Nasıl Kazanılır Popup */}
                    {howtoDo && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className="fixed inset-0 bg-black/50 z-40"
                                onClick={() => sethowtoDo(false)}
                            />
                            <div className="fixed -translate-x-1/2 -translate-y-1/2 bg-white border p-6 rounded-lg shadow-lg z-50 w-80 text-center">
                                <p className="font-bold mb-2">Nasıl Yeşil Puan Kazanırsın?</p>
                                <p className="text-sm">
                                    Ama size bir zevki kınama ve acıyı övme şeklindeki tüm bu yanlış fikrin nasıl doğduğunu açıklamalıyım.
                                </p>
                                <Plus
                                    className="absolute top-2 right-2 rotate-45 cursor-pointer"
                                    onClick={() => sethowtoDo(false)}
                                />
                            </div>
                        </motion.div>
                    )}
                </section>

                <section className="flex flex-col rounded-lg mt-5">
                    {/* Yeşil Ürünler Başlığı */}
                    <div className="font-bold text-center mt-5 text-xl">
                        Yeşil Ürünler:
                    </div>
                    {/* Ürünler Grid */}
                    <div className="flex flex-wrap justify-center space-x-3 space-y-3 m-4">
                        {Array.from({ length: 28 }).map((_, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-all max-w-44 md:max-w-64"
                            >
                                <div className="font-bold">Ürün {index + 1}</div>

                                <p className="text-sm">Ürün açıklaması buraya gelir.</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex font-semibold w-screen justify-center items-center transition-all duration-300 hover:text-[#659678] cursor-pointer p-2">
                        <span>Daha Fazla Yukle</span>
                    </div>
                </section>
            </motion.div>

        </main>
    );
}
