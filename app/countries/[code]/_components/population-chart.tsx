"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { PopulationCountDTO } from "@/app/_data-access/get-country-info";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  populationCounts: {
    label: "Population",
    color: "#10b981",
  },
} satisfies ChartConfig;

interface PopulationChartProps {
  data: PopulationCountDTO[];
}

const PopulationChart = ({ data }: PopulationChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-0 w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="year"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" radius={4} fill="var(--color-populationCounts)" />
      </BarChart>
    </ChartContainer>
  );
};

export default PopulationChart;
