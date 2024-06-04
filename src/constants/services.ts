import { LucideIcon } from "lucide-react";
import {
  Receipt,
  Wrench,
  MessageCircleQuestion,
  ShieldCheck,
} from "lucide-react";

export interface servicesCardsProps {
  id: number;
  title: string;
  icon: LucideIcon;
  cardImg: string;
  description: string;
}

const servicesList: servicesCardsProps[] = [
  {
    id: 1,
    title: "Buy and Sell",
    icon: Receipt,
    cardImg: "/services/buy-and-sell.png",
    description:
      "Explore our extensive collection of cutting-edge tech gadgets and find the perfect device to suit your needs. We offer a wide range of new and pre-owned items, ensuring you get the best value for your money. Our user-friendly platform makes buying and selling a breeze, with secure transactions and hassle-free shipping.",
  },
  {
    id: 2,
    title: "Repair and Service",
    icon: Wrench,
    cardImg: "/services/repair.png",
    description:
      "When your beloved gadgets experience issues, our team of certified technicians is here to help. We provide top-notch repair services for a variety of devices, including smartphones, laptops, tablets, and more. With state-of-the-art tools and extensive expertise, we diagnose and fix problems quickly, getting your gadgets back in perfect working condition.",
  },
  {
    id: 3,
    title: "Tech Consultations",
    icon: MessageCircleQuestion,
    cardImg: "/services/consultation.png",
    description:
      "Navigating the ever-evolving world of technology can be overwhelming. Our expert consultants are here to guide you through the process, providing personalized recommendations based on your specific needs and budget. Whether you're a tech enthusiast or a novice, we'll help you make informed decisions and find the ideal solutions to enhance your digital life.",
  },
  {
    id: 4,
    title: "Extended Warranties",
    icon: ShieldCheck,
    cardImg: "/services/warranty.png",
    description:
      "Investing in tech gadgets is a significant decision, and we believe in providing peace of mind. Our comprehensive extended warranty plans offer additional coverage beyond the manufacturer's warranty, ensuring your devices are protected against defects and malfunctions. With our warranties, you can enjoy your gadgets worry-free, knowing that you're covered in case of any unforeseen issues.",
  },
];

export { servicesList };
