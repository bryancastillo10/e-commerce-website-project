import { ChangeEvent } from "react";

interface TextAreaProps {
  id: string;
  placeholder: string;
  required: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ id, placeholder, required, onChange }: TextAreaProps) => {
  return (
    <>
      <label htmlFor={id} className="block text-secondary mb-1 ml-1">
        Message
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="block w-full p-2 rounded 
        focus:outline-primary focus:ring placeholder:text-primary 
        focus:ring-opacity-50 focus:primary resize-y"
      ></textarea>
    </>
  );
};

export default TextArea;
