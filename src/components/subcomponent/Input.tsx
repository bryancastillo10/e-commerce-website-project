import { ChangeEvent } from "react";

export interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, type, placeholder, required, onChange }: InputProps) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="block w-full p-2 rounded-xl focus:outline-none 
        focus:ring focus:ring-opacity-25 focus:dark:ring-primary
         dark:bg-gray-100 placeholder:text-primary"
      />
    </>
  );
};

export default Input;
