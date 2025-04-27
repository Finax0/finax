"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SavePageData, SavePageData1 } from "@/components/test/testResponses";
import { ArrowUp, Leaf, LeafIcon, MessageCircleQuestionIcon, Plus, User, User2, UserCheckIcon, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import PeriodToggle from "@/components/periodToggle";
import TopPopup from "@/components/topPopup";
import ProgressBar from "@/components/progressBar";
import DateFormat from "@/components/dateFormate";

export default function SavePage() {
    const [savePageData, setSavePageData] = useState(SavePageData1)
    const [notOrderedData, setNotOrderedData] = useState(SavePageData)
    const [showInfo, setShowInfo] = useState(false)

    const [isOrdered, setIsOrdered] = useState(false)

    return (
        <main className="mt-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <section className="flex flex-wrap p-4 bg-white rounded-lg">
                    <div className="relative">
                        <div className={`absolute -top-2 -right-2 rounded-full bg-[#f5f5f5] ${!!SavePageData.data.green_footprint.green_points ? "" : "hidden"}`}>
                            <Leaf />
                        </div>
                        <Image src="/images/canon_camera.jpeg" alt="Canon Camera" width={500} height={500} className={`aspect-square object-cover rounded-lg ${!!SavePageData.data.green_footprint.green_points ? "border-4 border-[#8ec291]" : ""}`} />
                    </div>
                    <div className="p-4 m-4 flex flex-col max-w-2xl min-w-[370px] space-y-3">
                        <div className="relative">
                            <p className={`absolute -top-6 left-0 text-sm font-semibold border-b border-[#8ec291] ${!!SavePageData.data.green_footprint.green_points ? "" : ""}`}>Nature-Friendly</p>
                            <h1 className="text-3xl font-bold">{savePageData.data.name}</h1>
                        </div>
                        <p className="">{savePageData.data.description}</p>
                        <div className="p-12 flex flew-row text-3xl items-center">
                            <p className="text-gray-300 text-xl line-through">${savePageData.data.price}</p>
                            <p className="text-[#8ec291] text-xs text-nowrap
                                                font-semibold pb-2 pl-1">-{savePageData.data.discount_rate * 100}%</p>

                            <ArrowUp className="rotate-90 min-w-6" />
                            <div className="flex flex-row items-center justify-center">
                                <p className="font-semibold">${savePageData.data.price * (100 - savePageData.data.discount_rate * 100) / 100}</p>
                                <span className="pl-3 text-sm text-[#8ec291] font-semibold">+ {savePageData.data.green_footprint.green_points + savePageData.data.green_footprint.daily_points} Green Points!</span>
                                {/* Soru işareti */}
                                <MessageCircleQuestionIcon
                                    color="#8ec291"
                                    className="w-5 h-5 min-w-5 min-h-5 flex self-start cursor-pointer"
                                    onClick={() => setShowInfo(true)}
                                />

                            </div>


                            {/* Popup Bilgi Kutusu */}
                            {showInfo && (
                                <section>
                                    <div
                                        className="fixed inset-0 bg-black/50 z-40"
                                        onClick={() => setShowInfo(false)}
                                    />
                                    <TopPopup >
                                        <p className="text-sm mb-4">
                                            🌿 Green Points, çevreci aktiviteler yaparak kazandığınız puanlardır.
                                        </p>
                                        <Plus
                                            className="absolute top-2 right-2 rotate-45 cursor-pointer"
                                            onClick={() => setShowInfo(false)}
                                        />
                                    </TopPopup>
                                </section>
                            )}
                        </div>
                        <Button variant={"default"} className="w-1/2 text-[#fbfee6] bg-[#8ec291] self-center rounded-xl cursor-pointer" onClick={() => { setIsOrdered(true) }}>Order Now</Button>
                        <p className="text-xs text-gray-300 self-end">
                            Until{"   "}
                            <DateFormat fullDate={savePageData.data.until_date} />
                        </p>
                    </div>

                    <section className="attendanceContainer p-4 flex flex-row items-start space-x-8">
                        <div>
                            <h1 className=" text-2xl font-semibold border-b-2 border-[#8ec291]">Current Savers</h1>
                            <div className="flex flex-row space-x-2">
                                <User />
                                <p>Required Savers: </p>
                                <p>{savePageData.data.required_attendance}</p>
                            </div>
                            <div className="flex flex-row space-x-2">
                                <UserPlus />
                                <p>Attended Savers: </p>
                                <p>{savePageData.data.attendances}</p>
                            </div>
                            <div className="flex flex-row space-x-2">
                                <UserCheckIcon />
                                <p>Savers Finished: </p>
                                <p>{savePageData.data.complements}</p>
                            </div>
                            <div>
                                <span className="text-xs">Progress for next delivery</span>
                                <ProgressBar balance={savePageData.data.attendances} price={savePageData.data.required_attendance} />
                            </div>
                        </div>
                        <div className="text-nowrap space-y-3">
                            <h1 className=" text-2xl font-semibold border-b-2 border-[#8ec291]">Save Plans</h1>
                            <div>
                                <div className="flex flex-row items-center">
                                    <p>Daily</p>
                                    <ArrowUp className="w-5 h-5 rotate-90" />
                                    <p>{savePageData.data.green_footprint.daily_points}</p>
                                    <LeafIcon />

                                </div>
                                <div className="flex flex-row items-center">
                                    <p>Weekly</p>
                                    <ArrowUp className="w-5 h-5 rotate-90" />
                                    <p>{savePageData.data.green_footprint.weekly_points}</p>
                                    <LeafIcon />

                                </div>
                            </div>
                        </div>
                    </section>

                </section>

                {isOrdered && (
                    <div className="scheduleContainer">
                        <PeriodToggle />
                    </div>
                )}

            </motion.div>

        </main>
    )
}
