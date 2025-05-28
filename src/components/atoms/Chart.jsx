"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    Tooltip,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart"


const ChartTooltipContent = ({ active, payload, label }) => {
    if (active && payload?.length) {
        return (
            <div className="bg-white p-2 shadow rounded">
                <p className="font-semibold">{label}</p>
                {payload.map((entry, index) => (
                    <p key={index} style={{ color: entry.fill }}>
                        {entry.name}: {entry.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const chartData = [
    { day: "Mon", desktop: 186, mobile: 80 },
    { day: "Tue", desktop: 305, mobile: 200 },
    { day: "Web", desktop: 237, mobile: 120 },
    { day: "Thu", desktop: 73, mobile: 190 },
    { day: "Fri", desktop: 209, mobile: 130 },
    { day: "Sat", desktop: 214, mobile: 140 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
};

export const Chart = () => (
    <div className="px-4">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} name="Desktop" />
                <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} name="Mobile" />
            </BarChart>
        </ChartContainer>
    </div>
);
