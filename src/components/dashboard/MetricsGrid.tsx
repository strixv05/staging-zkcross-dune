/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import MetricCard from "../MetricCard";
import { formatCommaStd, getRelativeTime } from "@/utils";
import { Spotlight } from "../ui/spotlight";

interface MetricsGridProps {
    statsData: any;
}

const MetricsGrid = ({ statsData }: MetricsGridProps) => {
    const metrics = [
        {
            title: "Volume",
            value: statsData?.totalVolume ? `${formatCommaStd(statsData?.totalVolume)} USD` : "130,728,591 USD",
            subtitle: "Volume",
            lastUpdated: statsData?.date ? getRelativeTime(statsData?.date) : "1d",
            isLastActive: true,
        },
        {
            title: "Transactions",
            value: statsData?.totalTxn ? `${formatCommaStd(statsData?.totalTxn)}` : "236,310",
            subtitle: "Transactions",
            lastUpdated: statsData?.date ? getRelativeTime(statsData?.date) : "1d",
            isLastActive: true,
        },
        {
            title: "Unique Active Wallets",
            value: statsData?.totalUser ? `${formatCommaStd(statsData?.totalUser)}` : "39,908",
            subtitle: "Unique Active Wallets",
            lastUpdated: statsData?.date ? getRelativeTime(statsData?.date) : "1d",
            isLastActive: true,
        },
        {
            title: "TVL",
            value: statsData?.totalTvl ? `$${formatCommaStd(statsData?.totalTvl?.grandTotal)}` : "-- --- --- ---",
            extraValue: statsData?.totalTvl,
            subtitle: "Total TVL",
            lastUpdated: statsData?.date && statsData?.totalTvl ? getRelativeTime(statsData?.date) : "--",
            isLastActive: statsData?.totalTvl ? true : false,
        },
        {
            title: "Infrastructure Revenue",
            value: statsData?.infraRevenue ? `$${formatCommaStd(statsData?.infraRevenue)}` : "$--- ---",
            subtitle: "Infrastructure Revenue",
            lastUpdated: statsData?.date && statsData?.infraRevenue ? getRelativeTime(statsData?.date) : "--",
            isLastActive: statsData?.infraRevenue ? true : false,
        },
        {
            title: "Transaction Revenue",
            value: statsData?.totalRevenue ? `$${formatCommaStd(statsData?.totalRevenue)}` : "$--- ---",
            subtitle: "Transaction Revenue",
            lastUpdated: statsData?.date && statsData?.totalRevenue ? getRelativeTime(statsData?.date) : "--",
            isLastActive: statsData?.totalRevenue ? true : false,
        },
        {
            title: "Grants",
            value: "$650,000",
            subtitle: "Grants",
            lastUpdated: getRelativeTime("2024-10-15T00:00:00.002Z"),
            isLastActive: true,
        },
    ];

    return (
        <Spotlight className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5">
            {metrics.map((metric, index) => (
                <MetricCard key={index} title={metric.title} value={metric.value} subtitle={metric.subtitle} lastUpdated={metric.lastUpdated} isLastActive={metric.isLastActive} extraValue={metric.extraValue} />
            ))}
        </Spotlight>
    );
};

export default MetricsGrid;
