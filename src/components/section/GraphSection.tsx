/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import VolumeChart from "../common/VolumeChart";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { baseUrl } from "@/service/api";

interface GraphSectionProps {
    label: string;
    apiEndpoint: string; // e.g. "/api/v1/stats/transactions/graph"
    dataMapping: (item: any, timeframe: any) => { volume: number; date: string };
    hoverLabel: string;
    statsDate?: string;
}

const GraphSection = ({ label, apiEndpoint, dataMapping, hoverLabel, statsDate }: GraphSectionProps) => {
    const [timeframe] = useState("all"); //setTimeframe
    const { data, isPending, error } = useQuery({
        queryKey: [label, timeframe],
        queryFn: () => fetch(`${baseUrl}${apiEndpoint}?fromTimeframe=${timeframe}`).then((res) => res.json()),
        staleTime: 60 * 1000,
    });

    if (error) return <div className="text-red-500">Error loading {label}</div>;

    const chartData = data?.data?.map((e: any) => dataMapping(e, timeframe)) || [];

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{label}</h3>
                {/* <Select onValueChange={(value) => setTimeframe(value)} defaultValue={timeframe}>
                    <SelectTrigger className="w-32">
                        <SelectValue placeholder="Select Timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="3m">3 Months</SelectItem>
                        <SelectItem value="6m">6 Months</SelectItem>
                        <SelectItem value="1y">1 Year</SelectItem>
                        <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                </Select> */}
            </div>
            <VolumeChart isPending={isPending} label={label} data={chartData} date={statsDate || ""} hoverLabel={hoverLabel} />
        </div>
    );
};

export default GraphSection;
