import { useEffect, useState } from "react";

interface CountryData {
  country: string;
  region: string;
}

interface APIResponse {
  data: Record<string, CountryData>;
}

export const fetchCountry = async (): Promise<string[]> => {
  try {
    const response = await fetch("https://api.first.org/data/v1/countries");
    const data: APIResponse = await response.json();

    const objectCountry = data.data as Record<string, CountryData>;

    const countries = Object.keys(objectCountry).map(
      (code) => objectCountry[code].country
    );
    return countries;
  } catch (err) {
    console.error("Error fetching the data", err);
    return [];
  }
};

export default function useFetchCountry() {
  const [country, setCountry] = useState<string[]>([]);

  useEffect(() => {
    fetchCountry().then((countries) => {
      setCountry(countries);
    });
  }, []);
  return country;
}
