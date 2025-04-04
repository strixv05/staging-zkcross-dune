/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { Card } from "./ui/card";
import { CircleCheckBig } from "lucide-react";
import { cn } from "@/lib/utils";
import { SpotLightItem } from "./ui/spotlight";

const MetricCard = ({ title, value, subtitle, lastUpdated = "4h", isLastActive = false, extraValue }: { title: string; value: any; subtitle: string; lastUpdated?: string; isLastActive?: boolean; extraValue?: any }) => {
    if (title === "Grants") {
        return null;
    }
    return (
        <SpotLightItem>
            <Card className={cn("relative overflow-hidden p-3 border rounded-lg group")}>
                <div className="flex justify-between items-start mb-12">
                    <span className="text-sm text-gray-400">{title}</span>
                </div>
                <div className="text-3xl text-indigo-400 mb-1 text-center">{value}</div>
                <div className="text-sm text-indigo-400 text-center">{subtitle}</div>
                <div className="flex items-center justify-between mt-12 text-xs text-gray-500">
                    <Link href="https://zkcross.network/" rel="noopener noreferrer" target="_blank">
                        @zkcross_network
                    </Link>
                    <div className="flex items-center justify-center gap-1 bg-zinc-800 px-1.5 py-0.5 rounded-full">
                        <span className="text-[11px] text-gray-400">{lastUpdated}</span>
                        <CircleCheckBig size={12} className={isLastActive ? "text-green-600" : "text-zinc-600"} />
                    </div>
                </div>
                {/* <div className="absolute left-[-30%] opacity-5 bottom-[-50%] group-hover:scale-150 group-hover:left-[-10%] group-hover:bottom-[-20%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 to-transparent size-64 rounded-full filter blur-xl transition-all duration-300"></div>
                <div className="absolute top-[-30%] opacity-5 right-[-30%] group-hover:scale-150 group-hover:top-[0%] group-hover:right-[0%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 to-transparent size-44 rounded-full filter blur-xl transition-all duration-300"></div> */}
            </Card>
        </SpotLightItem>
    );
};

export default MetricCard;
