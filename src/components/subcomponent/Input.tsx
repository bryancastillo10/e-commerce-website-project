import { ChangeEvent, useState } from "react";

interface InputProps {
  id: string;
  type: string;
  placeholder: string | undefined;
  required: boolean;
  errorMessage?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  type,
  placeholder,
  required,
  errorMessage,
  onChange,
}: InputProps) => {
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const handleBlur = () => {
    setShowWarning(!showWarning);
  };
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={handleBlur}
        data-focused={showWarning}
        className="block w-full p-2 rounded-xl focus:outline-none 
        focus:ring focus:ring-opacity-25 focus:ring-primary
         bg-gray-100 placeholder:text-primary"
      />
      {showWarning && (
        <span className="hidden text-danger text-[10px] lg:text-sm text-left">
          {errorMessage}**
        </span>
      )}
    </>
  );
};

export default Input;
