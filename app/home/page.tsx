"use client"
import FreeSwiper from "@/components/freeSwiper"
import { HomePageData } from "@/components/test/testResponses"
import { useState } from "react"
import { motion } from "framer-motion"


export default function Home() {
    const [homePageData, setHomePageData] = useState(HomePageData)

    return (
        <main className="flex flex-col min-h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <section className="mt-20 m-4 min-h-2xl bg-[#fbfee6] rounded-lg">
                    <p className="p-2 text-lg font-semibold">Tasarruflarim</p>
                    <FreeSwiper mode="snap" viewCount={1} spaceBetween={8} freeWidth="auto">
                        {homePageData.data.savings.map((item, index) => (
                            <div key={index} className="keen-slider__slide rounded-lg p-2 bg-gray-400">
                                <p>{item.name}</p>
                            </div>
                        ))}


                    </FreeSwiper>

                </section>

                <section>

                </section>
            </motion.div>
        </main>

    )
}
