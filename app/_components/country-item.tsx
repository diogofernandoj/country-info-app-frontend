import Image from "next/image";
import Link from "next/link";
import { CountryDTO } from "../_data-access/get-countries";

interface CountryItemProps {
  country: CountryDTO;
}

const CountryItem = ({ country }: CountryItemProps) => {
  return (
    <Link href={`/countries/${country.countryCode}`}>
      <div className="bg-white p-4 rounded-md flex flex-col gap-2 w-max">
        <Image
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.countryCode}.svg`}
          alt={country.name}
          height={60}
          width={180}
        />
        <p className="font-semibold text-center">{country.name}</p>
      </div>
    </Link>
  );
};

export default CountryItem;
