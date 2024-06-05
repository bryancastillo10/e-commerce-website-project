import { ChangeEvent, useState } from "react";
interface InputDateProps {
  id: string;
  type: string;
  label: string | undefined;
  min?: string;
  max?: string;
  required: boolean;
  errorMessage?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputDate = ({
  id,
  type,
  label,
  min,
  max,
  required,
  errorMessage,
  onChange,
}: InputDateProps) => {
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const handleBlur = () => {
    setShowWarning(!showWarning);
  };
  return (
    <div className="flex">
      <div className="flex justify-start items-center gap-1 text-primary">
        <label
          className="text-base font-base text-secondary min-w-fit"
          htmlFor={label}
        >
          {label}
        </label>
        <div className="">
          <input
            id={id}
            type={type}
            min={min}
            max={max}
            required={required}
            onChange={onChange}
            onBlur={handleBlur}
            data-focused={showWarning}
            className="rounded-xl w-full focus:dark:ring-primary"
          />
          {showWarning && (
            <span className="w-full hidden text-danger text-[10px] lg:text-sm text-center md:text-left">
              {errorMessage}**
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputDate;
