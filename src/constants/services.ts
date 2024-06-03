import { LucideIcon } from "lucide-react";
import {
  Receipt,
  Wrench,
  MessageCircleQuestion,
  ShieldCheck,
} from "lucide-react";

interface servicesCardsProps {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
}

const servicesList: servicesCardsProps[] = [
  {
    id: 1,
    title: "Buy and Sell",
    icon: Receipt,
    description: "Buy or sell new and pre-owned tech gadgets with ease",
  },
  {
    id: 2,
    title: "Repair and Service",
    icon: Wrench,
    description: "Get your devices repaired by our certified technicians",
  },
  {
    id: 3,
    title: "Tech Consultations",
    icon: MessageCircleQuestion,
    description:
      "Receive expert advice on the best tech solutions for your needs",
  },
  {
    id: 4,
    title: "Extended Warranties",
    icon: ShieldCheck,
    description:
      "Protect your investment with our comprehensive warranty plans",
  },
];

export { servicesList };
