import { FlagIcon } from "lucide-react";
import CountryItem from "./_components/country-item";
import { getCountries } from "./_data-access/get-countries";

const HomePage = async () => {
  const countries = await getCountries();

  return (
    <div className="flex flex-col gap-8 items-center p-8">
      <h1 className="flex items-center gap-1 font-bold">
        Country Info App <FlagIcon />
      </h1>

      <div className="flex justify-center flex-wrap gap-5">
        {countries.map((country) => (
          <CountryItem key={country.countryCode} country={country} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
