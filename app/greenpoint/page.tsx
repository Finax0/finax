'use client'
import { useState } from "react";
import Header from "@/components/header";
import Leaf from "@/public/icons/leaf.svg";
import Quest from "@/public/icons/quest-mark.svg";

export default function Greenpoint() {
  const [showInfo, setShowInfo] = useState(false);
  const [howtoDo, sethowtoDo] = useState(false);
  const [productInfo, setproductInfo] = useState(false); 

  return (
    <main>
      <Header />
      <div className="h-20" />
      <div className="box-border rounded-lg relative flex flex-col items-center justify-center border p-4">

        {/* Soru işareti */}
        <img
          src={Quest.src}
          alt="Quest Mark"
          className="w-5 h-5 absolute top-2 right-2 cursor-pointer"
          onClick={() => setShowInfo(true)}
        />

        {/* Popup Bilgi Kutusu */}
        {showInfo && (
          <>
            <div 
              className="fixed inset-0 bg-white/50 z-40"
              onClick={() => setShowInfo(false)} 
            />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border p-6 rounded-lg shadow-lg z-50 w-80 text-center">
              <p className="text-sm mb-4">
                🌿 Green Points, çevreci aktiviteler yaparak kazandığınız puanlardır.
              </p>
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
                onClick={() => setShowInfo(false)}
              >
                ✖
              </button>
            </div>
          </>
        )}

        <div className="font-bold text-center mt-2">
          Your Green Points:
        </div>
        <div className="border-b-2 border-green-400 w-60 my-2"></div>

        <div className="flex items-center justify-center mt-2 space-x-2">
          <div className="font-semibold text-lg text-center">4532</div>
          <img src={Leaf.src} alt="Leaf Icon" className="w-5 h-5" />
        </div>

        <div
          className="mt-3 text-sm cursor-pointer"
          onClick={() => sethowtoDo(true)}
        >
          Nasıl kazanılır?
        </div>

        {/* Nasıl Kazanılır Popup */}
        {howtoDo && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => sethowtoDo(false)}
            />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border p-6 rounded-lg shadow-lg z-50 w-80 text-center">
              <p className="font-bold mb-2">Nasıl Yeşil Puan Kazanırsın?</p>
              <p className="text-sm">
                Ama size bir zevki kınama ve acıyı övme şeklindeki tüm bu yanlış fikrin nasıl doğduğunu açıklamalıyım.
              </p>
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
                onClick={() => sethowtoDo(false)}
              >
                ✖
              </button>
            </div>
          </>
        )}

      </div>

      {/* Yeşil Ürünler Başlığı */}
      <div className="font-bold text-center mt-5 text-xl">
        Yeşil Ürünler:
      </div>

      {/* Ürünler Grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div 
            key={index}
            className="border rounded-lg p-6 flex flex-col items-center justify-center shadow hover:shadow-md transition"
          >
            <div className="text-green-700 font-bold mb-2">Ürün {index + 1}</div>

            <p className="text-sm text-gray-600">Ürün açıklaması buraya gelir.</p>
          </div>
        ))}
      </div>

    </main>
  );
}
