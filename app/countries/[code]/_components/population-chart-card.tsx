import { PopulationCountDTO } from "@/app/_data-access/get-country-info";
import PopulationChart from "./population-chart";

const PopulationChartCard = async ({
  populationCount,
}: {
  populationCount: PopulationCountDTO[];
}) => {
  return (
    <div className="flex h-60 w-full flex-col overflow-hidden rounded-xl bg-white p-6">
      <p className="text-lg font-semibold text-slate-900">Population</p>
      <p className="text-sm text-slate-400">
        Country{"'"}s population over time
      </p>
      <PopulationChart data={populationCount} />
    </div>
  );
};

export default PopulationChartCard;
