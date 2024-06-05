import { createContext, useState, FormEvent } from "react";
import {
  ContextProviderType,
  EventTypes,
  BillingContextType,
  BillingInput,
} from "./contextTypes";

export const BillingContext = createContext({} as BillingContextType);

const InitialObject = {
  firstName: "",
  lastName: "",
  email: "",
  birthday: "",
  shippingDate: "",
  country: "",
  shippingAddress: "",
  paymentMethod: "",
};

export const BillingContextProvider = ({ children }: ContextProviderType) => {
  // Handling Form
  const [formData, setFormData] = useState(InitialObject as BillingInput);

  const onChangeValues = (e: EventTypes) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const allFiledsAreFilled =
    formData.firstName !== "" &&
    formData.lastName !== "" &&
    formData.email !== "" &&
    formData.country !== "" &&
    formData.shippingDate !== "" &&
    formData.paymentMethod != "";

  // Modal UI
  const [openModal, setOpenModal] = useState<boolean>(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  // Handling Submit Button
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (allFiledsAreFilled && isAccepted) {
      toggleModal();
    }
  };

  const [isAccepted, setIsAccepted] = useState<boolean>(false);

  const handleAccepted = () => {
    setIsAccepted(!isAccepted);
  };

  const contextValues = {
    formData,
    onChangeValues,
    handleSubmit,
    handleAccepted,
    isAccepted,
    openModal,
    toggleModal,
  };
  return (
    <BillingContext.Provider value={contextValues}>
      {children}
    </BillingContext.Provider>
  );
};
