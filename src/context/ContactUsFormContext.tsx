import {
  ContextProviderType,
  ContactUsFormContextType,
  ContactInput,
} from "./contextTypes";
import { useState, createContext, FormEvent } from "react";
import { EventTypes } from "./contextTypes";

export const ContactUsFormContext = createContext(
  {} as ContactUsFormContextType
);

const InitialObject = {
  givenName: "",
  email: "",
  subject: "",
  country: "",
  message: "",
};

export const ContactUsFormContextProvider = ({
  children,
}: ContextProviderType) => {
  // Handling User Input
  const [forms, setForms] = useState(InitialObject as ContactInput);

  const onChangeValues = (e: EventTypes) => {
    setForms({ ...forms, [e.target.id]: e.target.value });
  };

  const allFiledsAreFilled =
    forms.givenName !== "" &&
    forms.email !== "" &&
    forms.country !== "" &&
    forms.message !== "";

  // Modal UI
  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  // Hanlding Submit Button
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (allFiledsAreFilled) {
      toggleModal();
    }
  };

  const contextValues = {
    forms,
    onChangeValues,
    handleSubmit,
    allFiledsAreFilled,
    openModal,
    toggleModal,
  };
  return (
    <ContactUsFormContext.Provider value={contextValues}>
      {children}
    </ContactUsFormContext.Provider>
  );
};
