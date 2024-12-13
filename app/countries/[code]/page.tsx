import CountryItem from "@/app/_components/country-item";
import { getCountryInfo } from "@/app/_data-access/get-country-info";
import Image from "next/image";
import PopulationChartCard from "./_components/population-chart-card";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const CountryDetailsPage = async ({ params }: { params: { code: string } }) => {
  const countryDetails = await getCountryInfo(params.code);

  return (
    <div className="w-full min-h-screen flex flex-col p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="bg-white text-gray-300 rounded-full p-2 transistion hover:bg-white/70"
            >
              <ArrowLeftIcon size={30} />
            </Link>

            <h2 className="font-bold text-2xl">
              {countryDetails.country.name}
            </h2>
          </div>
          <Image src={countryDetails.flag} alt="ok" height={220} width={300} />
        </div>
        <PopulationChartCard
          populationCount={countryDetails.populationData.populationCounts}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold mt-8">Countries around</h3>
        <div className="w-full flex gap-4 flex-wrap">
          {countryDetails.borders.map((country) => (
            <CountryItem key={country.countryCode} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsPage;
