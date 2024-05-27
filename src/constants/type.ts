import { LucideIcon } from "lucide-react";

interface NavItem {
    id: number;
    title: string;
    subTitle: string;
    link: string;
}

export interface NavDropDownProps {
    Home: NavItem[];
    Contact: NavItem[];
    Shop: NavItem[];
}

export interface servicesCardsProps {
    id: number;
    title: string;
    icon: LucideIcon;
    tooltip: string;
}

export interface socialMediaProps {
    id: number;
    name: string;
    icon: LucideIcon;
}

interface trendsArray {
    id: number;
    title: string;
    category: string;
    shareCounts: number;
    ratings: number;
}

export interface trendsInfoProps {
    name: string;
    posts: trendsArray[];
}

export interface customerFeedbackProps {
    id: number;
    author: string;
    affiliation: string;
    image: string;
    comment: string;
}

export interface billingFormItemsProps {
    id: number;
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    min?: string;
    max?: string;
    required: boolean;
}

export interface paymentMethodOptionsProps {
    id: number;
    type: string;
    value: string;
    payMethod: string;
}