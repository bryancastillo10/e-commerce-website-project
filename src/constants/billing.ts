import { shippingDate, maxDate } from "src/utilities";

interface billingFormItemsProps {
  id: number;
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  min?: string;
  max?: string;
  required: boolean;
}

interface paymentMethodOptionsProps {
  id: number;
  type: string;
  value: string;
  payMethod: string;
}

const billingFormItems: billingFormItemsProps[] = [
  {
    id: 1,
    label: "First Name",
    type: "text",
    name: "firstName",
    required: true,
  },
  {
    id: 2,
    label: "Last Name",
    type: "text",
    name: "lastName",
    required: true,
  },
  {
    id: 3,
    label: "Email",
    type: "text",
    name: "email",
    required: true,
  },
  {
    id: 4,
    label: "Birthday",
    type: "date",
    name: "birthday",
    min: "1960-01-01",
    max: maxDate,
    required: false,
  },
  {
    id: 5,
    label: "Shipping Date",
    type: "date",
    name: "shippingDate",
    min: shippingDate,
    required: true,
  },
];

const paymentMethodOptions: paymentMethodOptionsProps[] = [
  {
    id: 1,
    type: "radio",
    value: "Option1/MasterCard",
    payMethod: "MasterCard",
  },
  {
    id: 2,
    type: "radio",
    value: "Option2/Visa",
    payMethod: "Visa",
  },
  {
    id: 3,
    type: "radio",
    value: "Option3/Visa",
    payMethod: "Cryptocurrency",
  },
  {
    id: 4,
    type: "radio",
    value: "Option4/Visa",
    payMethod: "Cash on Delivery (COD)",
  },
];

export { billingFormItems, paymentMethodOptions };
