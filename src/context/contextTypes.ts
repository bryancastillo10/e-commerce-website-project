import { ReactNode, ChangeEvent, FormEvent } from "react";

// General Contexts Types
export type EventTypes =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>
  | ChangeEvent<HTMLTextAreaElement>;

export interface ContextProviderType {
  children: ReactNode;
}

// Theme Context
export interface ThemeContextType {
  theme: boolean;
  toggleTheme: () => void;
}

// Contact Us Form Context
export interface ContactUsFormContextType {
  forms: ContactInput;
  onChangeValues: (e: EventTypes) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  allFieldsAreFilled: boolean;
  openModal: boolean;
  toggleModal: () => void;
}

export interface ContactInput {
  givenName: string;
  email: string;
  subject: string;
  country: string;
  message: string;
}

// Quote Generator Context
export interface QuoteContextType {
  isLoading: boolean;
  contentAuthor: ContentAuthorType[];
  tagLine: string[];
  allowFetch: boolean;
  handleFetch: () => void;
}

export interface ContentAuthorType {
  content: string;
  author: string;
}

export interface QuoteCardsProps {
  generatedQuotes: ContentAuthorType[];
  tags: string[];
}

// Shopping Contexts
export interface ShoppingContextType {
  getItemQuantity: (id: number) => number;
  increaseCart: (id: number) => void;
  decreaseCart: (id: number) => void;
  removeCart: (id: number) => void;
  cartItems: CartItemsType[];
  cartQuantity: number;
  openCart: boolean;
  toggleCart: () => void;
  totalPrice: number;
  clientCartItems: clientCartItemsProps[];
}

export interface CartItemsType {
  id: number;
  quantity: number;
}

export interface CartListProps {
  openCart: boolean;
  toggleCart: () => void;
}

export interface AddedCartItemsProps {
  id: number | null;
  quantity: number;
  removeCart: (id: number) => void;
}

export interface clientCartItemsProps {
  id: number;
  quantity: number;
  name: string;
  price: number;
}

// Billing Form Context
export interface BillingContextType {
  formData: BillingInput;
  onChangeValues: (e: EventTypes) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  openModal: boolean;
  toggleModal: () => void;
  isAccepted: boolean;
  handleAccepted: () => void;
}

export interface BillingInput {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  shippingDate: string;
  country: string;
  shippingAddress: string;
  paymentMethod: string;
}
