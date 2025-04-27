
type ProgressBarProps = {
    balance: number;
    price: number;
};

export default function ProgressBar({ balance, price }: ProgressBarProps) {
    const progressPercentage = Math.min((balance / price) * 100, 100);

    return (
        <div className="flex flex-row w-full space-x-3 items-center">
            <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                    className="bg-[#80b388] h-4 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>
            <span className="text-sm font-semibold text-[#659678]">{Math.round(progressPercentage)}%</span>
        </div>
    );
}
