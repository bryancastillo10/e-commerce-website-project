import { ChangeEvent } from "react";


interface SelectProps {
  id: string;
  required: boolean;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const Select = ({ id, required,options, onChange }: SelectProps) => {

  return (
    <select
      className="text-primary block w-full p-2 rounded-xl focus:outline-none"
      id={id}
      defaultValue=""
      required={required}
      onChange={onChange}
    >
      <option value="">Select a {id}</option>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
};

export default Select;
