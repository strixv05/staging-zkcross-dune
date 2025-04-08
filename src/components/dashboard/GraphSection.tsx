/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import VolumeChart from "../VolumeChart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const baseUrl = "https://aa1c-2401-4900-8843-57cb-b213-67c4-11ba-940f.ngrok-free.app/api/v1"; //"https://api.zkcross.network/api/v1";

interface GraphSectionProps {
    label: string;
    apiEndpoint: string; // e.g. "/api/v1/stats/transactions/graph"
    dataMapping: (item: any, timeframe: any) => { volume: number; date: string };
    hoverLabel: string;
    statsDate?: string;
}

const GraphSection = ({ label, apiEndpoint, dataMapping, hoverLabel, statsDate }: GraphSectionProps) => {
    const [timeframe, setTimeframe] = useState("3m");
    const { data, isPending, error } = useQuery({
        queryKey: [label, timeframe],
        queryFn: () => fetch(`${baseUrl}${apiEndpoint}?fromTimeframe=${timeframe}`, { headers: { "ngrok-skip-browser-warning": "true" } }).then((res) => res.json()),
        staleTime: 60 * 1000,
    });

    if (error) return <div className="text-red-500">Error loading {label}</div>;

    const chartData = data?.data?.map((e: any) => dataMapping(e, timeframe)) || [];

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{label}</h3>
                <Select onValueChange={(value) => setTimeframe(value)} defaultValue={timeframe}>
                    <SelectTrigger className="w-32">
                        <SelectValue placeholder="Select Timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="3m">3 Months</SelectItem>
                        <SelectItem value="6m">6 Months</SelectItem>
                        <SelectItem value="1y">1 Year</SelectItem>
                        <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <VolumeChart isPending={isPending} label={label} data={chartData} date={statsDate || ""} hoverLabel={hoverLabel} />
        </div>
    );
};

export default GraphSection;
