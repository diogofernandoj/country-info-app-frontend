import "server-only";
import { CountryDTO } from "./get-countries";

export interface PopulationCountDTO {
  year: number;
  value: number;
}

export interface DetailedCountryDTO {
  country: CountryDTO;
  borders: CountryDTO[];
  populationData: {
    country: string;
    code: string;
    iso3: string;
    populationCounts: PopulationCountDTO[];
  };
  flag: string;
}

export const getCountryInfo = async (
  countryCode: string
): Promise<DetailedCountryDTO> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      "API base URL is not defined. Check your environment variables."
    );
  }

  try {
    const response = await fetch(`${baseUrl}/countries/${countryCode}`);

    if (!response.ok) {
      throw new Error("Failed to fetch country info");
    }

    const { country, borders, populationData, flag } = await response.json();

    return {
      country,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      borders: borders.map((border: any) => ({
        name: border.commonName,
        countryCode: border.countryCode,
      })),
      populationData,
      flag,
    };
  } catch (error) {
    console.error("Error fetching country info:", error);
    throw new Error("Could not fetch country data. Please try again later.");
  }
};
