import "server-only";

export interface CountryDTO {
  name: string;
  countryCode: string;
}

export const getCountries = async (): Promise<CountryDTO[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      "API base URL is not defined. Check your environment variables."
    );
  }

  try {
    const response = await fetch(`${baseUrl}/countries/available`);

    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw new Error("Could not fetch countries data. Please try again later.");
  }
};
