import { shippingDate, maxDate } from "src/utilities";

interface billingFormItemsProps {
  id: number;
  type: string;
  label?: string;
  name: string;
  placeholder?: string;
  min?: string;
  max?: string;
  required: boolean;
  errorMessage?: string;
}

interface paymentMethodOptionsProps {
  id: number;
  value: string;
  payMethod: string;
}

const billingFormItems: billingFormItemsProps[] = [
  {
    id: 1,
    type: "text",
    name: "firstName",
    required: true,
    placeholder: "Enter your first name",
    errorMessage: "First name is required",
  },
  {
    id: 2,
    type: "text",
    name: "lastName",
    required: true,
    placeholder: "Enter your last name",
    errorMessage: "Last name is required",
  },
  {
    id: 3,
    type: "text",
    name: "email",
    required: true,
    placeholder: "Enter your email",
    errorMessage: "Email is required",
  },
  {
    id: 4,
    type: "date",
    label: "Birthday",
    name: "birthday",
    min: "1960-01-01",
    max: maxDate,
    required: false,
  },
  {
    id: 5,
    type: "date",
    label: "Shipping Date",
    name: "shippingDate",
    min: shippingDate,
    required: true,
    errorMessage: "Suggested shipping date is required",
  },
];

const paymentMethodOptions: paymentMethodOptionsProps[] = [
  {
    id: 1,
    value: "Option1/MasterCard",
    payMethod: "MasterCard",
  },
  {
    id: 2,
    value: "Option2/Visa",
    payMethod: "Visa",
  },
  {
    id: 3,
    value: "Option3/Visa",
    payMethod: "Cryptocurrency",
  },
  {
    id: 4,
    value: "Option4/Visa",
    payMethod: "Cash on Delivery (COD)",
  },
];

export { billingFormItems, paymentMethodOptions };
