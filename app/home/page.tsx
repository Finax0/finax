"use client"
import Footer from "@/components/footer"
import FreeSwiper from "@/components/freeSwiper"
import Header from "@/components/header"
import { HomePageData } from "@/components/test/testResponses"
import { useState } from "react"


export default function Home() {
    const [homePageData, setHomePageData] = useState(HomePageData)

    return (
        <main className="flex flex-col min-h-screen">
            <Header />
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
            <Footer />
        </main>

    )
}
