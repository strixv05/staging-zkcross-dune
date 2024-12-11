import Link from "next/link";
import { Card } from "./ui/card";
import { CircleCheckBig } from "lucide-react";

const MetricCard = ({ title, value, subtitle, lastUpdated = "4h" }: { title: string; value: string; subtitle: string; lastUpdated?: string }) => (
    <Card className="p-3 border rounded-lg">
        <div className="flex justify-between items-start mb-3">
            <span className="text-sm text-gray-400">{title}</span>
        </div>
        <div className="text-3xl text-indigo-400 mb-1 text-center">{value}</div>
        <div className="text-sm text-indigo-400 text-center">{subtitle}</div>
        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
            <Link href="https://zkcross.network/" rel="noopener noreferrer" target="_blank">@zkcross_network</Link>
            <div className="flex items-center justify-center gap-1 bg-zinc-800 px-1.5 py-0.5 rounded-full">
                <span className="text-[11px] text-gray-400">{lastUpdated}</span>
                <CircleCheckBig size={12} className="text-green-600"/>
                {/* <div className="w-2 h-2 rounded-full bg-green-600 -translate-y-[0.5px]"></div> */}
            </div>
        </div>
    </Card>
);

export default MetricCard;
