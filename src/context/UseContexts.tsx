import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { ContactUsFormContext } from "./ContactUsFormContext";
import { QuoteContext } from "./QuotesContext";
import { ShoppingContext } from "./ShopContext";
import { BillingContext } from "./BillingInfoContext";

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export const useContactFormContext = () => {
    return useContext(ContactUsFormContext);
}

export const useQuotesContext = () => {
    return useContext(QuoteContext);
}

export const useShoppingContext = () => {
    return useContext(ShoppingContext);
}

export const useBillingContext = () => {
    return useContext(BillingContext);
}