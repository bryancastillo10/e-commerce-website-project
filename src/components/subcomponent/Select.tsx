import { ChangeEvent, useState } from "react";

interface SelectProps {
  id: string;
  label: string;
  required: boolean;
  errorMessage: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const Select = ({
  id,
  label,
  required,
  errorMessage,
  options,
  onChange,
}: SelectProps) => {
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const handleBlur = () => {
    setShowWarning(!showWarning);
  };

  return (
    <>
      <select
        className="text-primary block w-full p-2 rounded-xl focus:outline-none"
        id={id}
        defaultValue=""
        required={required}
        onChange={onChange}
        onBlur={handleBlur}
        data-focused={showWarning}
      >
        <option value="">Select a {label}</option>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
      {showWarning && (
        <span className="hidden text-danger text-[10px] lg:text-sm text-left">
          {errorMessage}**
        </span>
      )}
    </>
  );
};

export default Select;
