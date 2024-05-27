import { createContext, useState, FormEvent } from "react";
import {
    ContextProviderType, EventTypes,
    BillingContextType, BillingInput
} from "./contextTypes";

export const BillingContext = createContext({} as BillingContextType);

const InitialObject = {
    firstName: "", lastName: "", email: "",
    birthday: "", shippingDate: "", country: "",
    shippingAddress: "", paymentMethod: ""
}

export const BillingContextProvider = ({ children }: ContextProviderType) => {
    // Handling Form
    const [forms, setForms] = useState(InitialObject as BillingInput)

    const onChangeValues = (e: EventTypes) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
    }

    const allFiledsAreFilled = (forms.firstName !== "" && forms.lastName !== "" &&
        forms.email !== "" && forms.country !== "" && forms.shippingDate !== "" &&
        forms.paymentMethod !=""
        );


    // Modal UI
    const [openModal, setOpenModal] = useState<boolean>(false);
    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    // Handling Submit Button
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (allFiledsAreFilled && isAccepted){
            toggleModal();
        }
    }

    const [isAccepted, setIsAccepted] = useState<boolean>(false);

    const handleAccepted = () => {
        setIsAccepted(!isAccepted);
    }

    const contextValues = {
        forms, onChangeValues, handleSubmit, handleAccepted,isAccepted,
        openModal, toggleModal,
    }
    return <BillingContext.Provider value={contextValues}>
        {children}
    </BillingContext.Provider>
} 