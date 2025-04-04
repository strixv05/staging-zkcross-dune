/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { getRelativeTime } from "@/utils";
import { CircleCheckBig } from "lucide-react";
import ReactLoading from "react-loading";

const VolumeChart = ({ label, data, date, hoverLabel, isPending }: { label: string; data: any[]; date: string; hoverLabel: string; isPending: boolean }) => {
    // const data = [
    //     { date: "Apr 2022", volume: 5 },
    //     { date: "Apr 29 2022", volume: 5.5 },
    //     { date: "May 6 2022", volume: 6 },
    //     { date: "May 13 2022", volume: 6.2 },
    //     { date: "May 20 2022", volume: 6.5 },
    //     { date: "May 27 2022", volume: 6.8 },
    //     { date: "Jun 3 2022", volume: 7 },
    //     { date: "Jul 2022", volume: 8 },
    //     { date: "Jul 29 2022", volume: 9 },
    //     { date: "Aug 5 2022", volume: 9.5 },

    const formatYAxis = (value: number): string => {
        const formatter = new Intl.NumberFormat("en-US", {
            notation: "compact", // Enables compact formatting (e.g., K, M, B)
            maximumFractionDigits: 1, // Limits to one decimal place
        });
        return formatter.format(value); // Formats the value
    };

    return (
        <Card className="w-full p-0">
            <CardHeader className="p-3">
                <CardTitle className="text-sm text-gray-400 font-normal">{label}</CardTitle>
            </CardHeader>
            <CardContent className="pl-0 pr-2 py-3">
                <div className="h-72 w-full">
                    {isPending ? (
                        <div className="flex items-center justify-center h-72 w-full">
                            <ReactLoading type="bars" color="#818cf8" height={40} width={40} />
                        </div>
                    ) : (
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 50,
                                    left: 10,
                                    bottom: 5,
                                }}
                            >
                                <defs>
                                    <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#818cf8" stopOpacity={0.2} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="date" tick={{ fontSize: 12 }} tickMargin={10} minTickGap={20} />
                                <YAxis dataKey="volume" tickFormatter={formatYAxis} tick={{ fontSize: 12 }} tickMargin={10} axisLine={false} />
                                {/* <Grid
                                vertical={false}
                                strokeDasharray="3 3"
                                strokeWidth={1}
                                stroke="#e5e7eb"
                            /> */}
                                <CartesianGrid strokeWidth={1} stroke="#eeeeee18" vertical={false} />
                                <Tooltip
                                    formatter={(value) => [Number(value).toFixed(2), hoverLabel]}
                                    itemStyle={{ color: "#818cf8" }}
                                    labelStyle={{ color: "#eeeeee" }}
                                    contentStyle={{
                                        backgroundColor: "black",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        paddingBlock: "8px",
                                        lineHeight: "1.2",
                                        color: "white",
                                        paddingInline: "12px",
                                        fontSize: "12px",
                                    }}
                                />
                                <Area type="monotone" dataKey="volume" stroke="#2563eb" fill="url(#volumeGradient)" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </CardContent>
            <CardFooter className="p-3">
                <div className="flex items-center justify-between w-full text-xs text-gray-500">
                    <Link href="https://zkcross.network/" rel="noopener noreferrer" target="_blank">
                        @zkcross_network
                    </Link>
                    <div className="flex items-center justify-center gap-1 bg-zinc-800 px-1.5 py-0.5 rounded-full">
                        <span className="text-[11px] text-gray-400">{date ? getRelativeTime(date) : "1d"}</span>
                        {/* <div className="w-2 h-2 rounded-full bg-green-600 -translate-y-[0.5px]"></div> */}
                        <CircleCheckBig size={12} className="text-green-600" />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default VolumeChart;
