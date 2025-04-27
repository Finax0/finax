"use client";
import ProgressBar from "@/components/progressBar";
import { SavingsPageData } from "@/components/test/testResponses";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, CircleIcon, GithubIcon, Leaf, Menu, MenuSquareIcon, User } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DateFormat from "@/components/dateFormate";
import { Button } from "@/components/ui/button";
import TruncateString from "@/components/truncateString";


export default function Savings() {
    const [savingsData, setSavingsData] = useState(SavingsPageData);
    const [expandedTabs, setExpandedTabs] = useState<{ [key: number]: boolean }>([]);

    const toggleTab = (id: number) => {
        setExpandedTabs((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the specific order
        }));
    };

    return (
        <main className="mt-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="items-center justify-center text-[#8ec291] rounded-lg"
            >
                <h1 className="p-2 text-lg font-bold">Active Savings</h1>
                <section className="flex flex-wrap justify-center">
                    {savingsData.data.savings.map((item, index) => (
                        <div key={index}>
                            {item.status && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-4 m-4 w-[380px] bg-[#f5f5f5] rounded-lg shadow-md space-y-3 cursor-pointer"
                                    onClick={() => toggleTab(index)}
                                >
                                    <div>
                                        <h1 className="text-lg font-bold">{item.name}</h1>
                                        <div className="flex flew-row items-center">

                                            <p className="text-gray-300 line-through">${item.price}</p>
                                            <p className="text-[#8ec291] text-xs text-nowrap
                                                font-semibold pb-2 pl-1">-{item.discount_rate * 100}%</p>

                                            <ArrowUp className="rotate-90" />
                                            <p>${item.price * (100 - item.discount_rate * 100) / 100}</p>

                                        </div>

                                        <div className="w-48">
                                            <ProgressBar balance={item.balance} price={item.price * (100 - (item.discount_rate * 100)) / 100} />
                                        </div>
                                        <AnimatePresence>
                                            {expandedTabs[index] && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="m-2 overflow-hidden"
                                                >
                                                    <div className="flex flex-row space-x-3">
                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="relative">
                                                                {/* Leaf Icon */}
                                                                <div className={`absolute -top-2 -right-2 rounded-full bg-[#f5f5f5] ${!!item.green_footprint.green_points ? "" : "hidden"}`}>
                                                                    <Leaf />
                                                                </div>

                                                                {/* Image */}
                                                                <Image
                                                                    src={item.image}
                                                                    alt="savings"
                                                                    width={100}
                                                                    height={100}
                                                                    className={`object-cover rounded-lg ${!!item.green_footprint.green_points ? "border-4 border-[#8ec291]" : ""}`}
                                                                />
                                                            </div>

                                                            {/* Until Date */}
                                                            <div className="mt-2">
                                                                Until:{" "}
                                                                <DateFormat fullDate={item.until_date} />
                                                            </div>
                                                        </div>


                                                        <div className="space-y-3">
                                                            <div className="text-sm font-semibold">
                                                                <TruncateString string={item.description} firstIndex={0} lastIndex={32} addPoints={true} />
                                                            </div>
                                                            <div className="flex flex-row text-center items-center space-x-2">
                                                                <div>
                                                                    <User />
                                                                    <span>{item.required_attendance}</span>
                                                                </div>
                                                                <div>
                                                                    <MenuSquareIcon />
                                                                    <span>{item.attendances}</span>
                                                                </div>
                                                                <div>
                                                                    <GithubIcon />
                                                                    <span>{item.complements}</span>
                                                                </div>
                                                                <span className={`text-sm font-semibold border-b border-[#8ec291] ${!!item.green_footprint.green_points ? "" : "hidden"}`}>+{item.green_footprint.green_points + item.green_footprint.pointed_points} Green Points</span>
                                                            </div>
                                                            <div className="text-sm font-semibold">%{item.progress_percentage} attendances.</div>
                                                            <Link href={`/save/${item.slug}`} className="flex flex-row items-center space-x-2">
                                                                <Button variant="outline" className="w-full hover:bg-[#8ec291] hover:text-[#fbfee6] cursor-pointer">more info</Button>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </section>

                <h1 className="p-2 text-lg font-bold">Saving History</h1>
                <section className="flex flex-wrap justify-center">
                    {savingsData.data.savings.map((item, index) => (
                        <div key={index}>

                            {!item.status && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-4 m-4 w-[380px] bg-[#f5f5f5] rounded-lg shadow-md space-y-3 cursor-pointer"
                                    onClick={() => toggleTab(index)}
                                >
                                    <div>
                                        <div className="relative">
                                            {item.price * (100 - (item.discount_rate * 100)) / 100 > item.balance && !expandedTabs[index] && (
                                                <div className="absolute -inset-4 bg-black/20 flex items-start justify-end rounded-lg z-50">
                                                    <span className="text-red-500 text-xl font-bold m-2">Canceled</span>
                                                </div>
                                            )}

                                            {item.price * (100 - (item.discount_rate * 100)) / 100 <= item.balance && !expandedTabs[index] && (
                                                <div className="absolute -inset-2 flex flex-col items-end justify-start rounded-lg z-50">
                                                    <span className="text-[#659678] text-xl font-bold">Completed</span>
                                                    {!!item.green_footprint.green_points && <p className="text-[#8ec291] font-semibold ">{item.green_footprint.green_points + item.green_footprint.pointed_points} Green Points Earned!</p>}

                                                </div>

                                            )}

                                            <h1 className="text-lg font-bold">{item.name}</h1>
                                            <div className="flex flew-row items-center">

                                                <p className="text-gray-300 line-through">${item.price}</p>
                                                <p className="text-[#8ec291] text-xs text-nowrap
                                                font-semibold pb-2 pl-1">-{item.discount_rate * 100}%</p>

                                                <ArrowUp className="rotate-90" />
                                                <p>${item.price * (100 - item.discount_rate * 100) / 100}</p>

                                            </div>

                                            <div className="w-48">
                                                <ProgressBar balance={item.balance} price={item.price * (100 - (item.discount_rate * 100)) / 100} />
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {expandedTabs[index] && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="m-2 overflow-hidden"
                                                >
                                                    <div className="flex flex-row space-x-3">
                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className="relative">
                                                                {/* Leaf Icon */}
                                                                <div className={`absolute -top-2 -right-2 rounded-full bg-[#f5f5f5] ${!!item.green_footprint.green_points ? "" : "hidden"}`}>
                                                                    <Leaf />
                                                                </div>

                                                                {/* Image */}
                                                                <Image
                                                                    src={item.image}
                                                                    alt="savings"
                                                                    width={100}
                                                                    height={100}
                                                                    className={`object-cover rounded-lg ${!!item.green_footprint.green_points ? "border-4 border-[#8ec291]" : ""}`} />
                                                            </div>

                                                            {/* Until Date */}
                                                            <div className="mt-2">
                                                                Until:{" "}
                                                                <DateFormat fullDate={item.until_date} />
                                                            </div>
                                                        </div>


                                                        <div className="space-y-3">
                                                            <div className="text-sm font-semibold">
                                                                <TruncateString string={item.description} firstIndex={0} lastIndex={32} addPoints={true} />
                                                            </div>
                                                            <div className="flex flex-row text-center items-center space-x-2">
                                                                <div>
                                                                    <User />
                                                                    <span>{item.required_attendance}</span>
                                                                </div>
                                                                <div>
                                                                    <MenuSquareIcon />
                                                                    <span>{item.attendances}</span>
                                                                </div>
                                                                <div>
                                                                    <GithubIcon />
                                                                    <span>{item.complements}</span>
                                                                </div>
                                                                <span className={`text-sm font-semibold border-b border-[#8ec291] ${!!item.green_footprint.green_points ? "" : "hidden"}`}>+{item.green_footprint.green_points + item.green_footprint.pointed_points} Green Points</span>
                                                            </div>
                                                            <div className="text-sm font-semibold">%{item.progress_percentage} attendances.</div>
                                                            <Link href={`/save/${item.slug}`} className="flex flex-row items-center space-x-2">
                                                                <Button variant="outline" className="w-full hover:bg-[#8ec291] hover:text-[#fbfee6] cursor-pointer">more info</Button>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </section>


            </motion.div>

        </main>
    )
}
