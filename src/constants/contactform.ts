interface contactFieldsProps {
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
  errorMessage?: string;
}

const contactFields: contactFieldsProps[] = [
  {
    id: "givenName",
    type: "text",
    placeholder: "Enter your name",
    required: true,
    errorMessage: "Name is required",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    errorMessage: "Email is required",
  },
  {
    id: "subject",
    type: "text",
    placeholder: "Enter a subject title",
    required: false,
  },
];

export { contactFields };
