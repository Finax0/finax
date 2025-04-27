"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TopPopup({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShow(false);
    //     }, 3000); // Auto-hide after 3 seconds
    //
    //     return () => clearTimeout(timer);
    // }, []);

    if (!show) return null;

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, y: 350, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-[#8ec291] text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
            {children}
        </motion.div>
    );
}
