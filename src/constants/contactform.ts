interface contactFieldsProps {
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
}

const contactFields: contactFieldsProps[] = [
  {
    id: "givenName",
    type: "text",
    placeholder: "Enter your name",
    required: true,
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    id: "subject",
    type: "text",
    placeholder: "Enter a subject title",
    required: false,
  },
];

export { contactFields };
