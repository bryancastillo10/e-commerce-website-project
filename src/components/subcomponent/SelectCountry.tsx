import { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { fetchCountry } from "src/utilities";

interface SelectProps {
  id: string;
  required: boolean;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectCountry = ({ id, required, onChange }: SelectProps) => {
  const [country, setCountry] = useState<string[]>([]);
  useEffect(() => {
    fetchCountry().then((countries) => {
      setCountry(countries);
    });
  }, []);

  return (
    <select
      className="text-primary block w-full p-2 rounded-xl focus:outline-none"
      id={id}
      required={required}
      onChange={onChange}
    >
      <option disabled>Select a {id}</option>
      {country.map((countrylist) => (
        <option key={countrylist}>{countrylist}</option>
      ))}
    </select>
  );
};

export default SelectCountry;
