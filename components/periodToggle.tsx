import { useState } from "react";

export default function PeriodToggle() {
    const [period, setPeriod] = useState<"daily" | "weekly">("daily");

    return (
        <div className="flex items-center justify-center space-x-2">
            <button
                onClick={() => setPeriod("daily")}
                className={`px-4 py-2 rounded-full transition ${period === "daily" ? "bg-[#8ec291] text-white" : "bg-gray-200 text-gray-700"
                    }`}
            >
                Daily
            </button>

            <button
                onClick={() => setPeriod("weekly")}
                className={`px-4 py-2 rounded-full transition ${period === "weekly" ? "bg-[#8ec291] text-white" : "bg-gray-200 text-gray-700"
                    }`}
            >
                Weekly
            </button>
        </div>
    );
}

