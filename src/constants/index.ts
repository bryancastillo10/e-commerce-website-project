import {
    NavDropDownProps, servicesCardsProps,
    socialMediaProps, trendsInfoProps, customerFeedbackProps,
    billingFormItemsProps, paymentMethodOptionsProps
} from "./type";
import { shippingDate, maxDate } from "src/utilities";
import { Receipt, Wrench, MessageCircleQuestion, ShieldCheck } from "lucide-react";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";

const NavDropDown: NavDropDownProps = {
    "Home": [{
        id: 1,
        title: "About",
        subTitle: "Shop Details",
        link: "about"
    },
    {
        id: 2,
        title: "Testimonials",
        subTitle: "Customer Feedback",
        link: "testimonials"
    },
    {
        id: 3,
        title: "Sales",
        subTitle: "Latest Announcements",
        link: "sales"
    }
    ],

    "Contact": [{
        id: 1,
        title: "Message Us",
        subTitle: "Feel Free to Approach us",
        link: "contact-form"
    },
    {
        id: 2,
        title: "Services",
        subTitle: "Services We Can Offer",
        link: "services"

    },
    {
        id: 3,
        title: "Get Quotes",
        subTitle: "Random Quote Generator",
        link: "quotes"
    }],
    "Shop": [{
        id: 1,
        title: "Shop Now",
        subTitle: "Check Our Online Store",
        link: "shop-items"
    },
    {
        id: 2,
        title: "Sales",
        subTitle: "Get the Latest Update",
        link: "sales"
    }
    ]
}

const servicesList: servicesCardsProps[] = [
    {
        id: 1,
        title: "Buy and Sell",
        icon: Receipt,
        tooltip: "Buy or sell new and pre-owned tech gadgets with ease",
    },
    {
        id: 2,
        title: "Repair and Service",
        icon: Wrench,
        tooltip: "Get your devices repaired by our certified technicians",
    },
    {
        id: 3,
        title: "Tech Consultations",
        icon: MessageCircleQuestion,
        tooltip: "Receive expert advice on the best tech solutions for your needs",
    },
    {
        id: 4,
        title: "Extended Warranties",
        icon: ShieldCheck,
        tooltip: "Protect your investment with our comprehensive warranty plans",
    },
]

const socialMedia: socialMediaProps[] = [
    {
        id: 1,
        name: "Facebook",
        icon: Facebook,
    },
    {
        id: 2,
        name: "Twitter",
        icon: Twitter,
    },
    {
        id: 3,
        name: "Instagram",
        icon: Instagram,
    },
    {
        id: 4,
        name: "Linkedin",
        icon: Linkedin,
    },
];

const trendsInfo: trendsInfoProps[] = [
    {
        name: "Popular",
        posts: [{
            id: 1,
            title: "Apple iPhone 15 Pro",
            category: "New Arrival",
            shareCounts: 220,
            ratings: 4.7,
        },
        {
            id: 2,
            title: "Asus TUF F15",
            category: "Sale",
            shareCounts: 320,
            ratings: 4.8,
        }, {
            id: 3,
            title: "Lenovo ThinkPad L14",
            category: "Promotion",
            shareCounts: 300,
            ratings: 4.8,
        },
        ]
    },
    {
        name: "FAQs",
        posts: [{
            id: 1,
            title: "Do you offer international shipping?",
            category: "Services",
            shareCounts: 100,
            ratings: 4.5,
        },
        {
            id: 2,
            title: "What should I do if I receive a defective item?",
            category: "Services",
            shareCounts: 90,
            ratings: 4.5,
        },
        {
            id: 3,
            title: "Do you provide tech support for purchased gadgets?",
            category: "Support",
            shareCounts: 600,
            ratings: 4.5,
        },
        ]
    },
    {
        name: "Trending",
        posts: [{
            id: 1,
            title: "Asus ROG Phone",
            category: "Mobile",
            shareCounts: 300,
            ratings: 4.8,
        },
        {
            id: 2,
            title: "Acer Swift 3",
            category: "Laptop",
            shareCounts: 200,
            ratings: 4.7,
        },
        {
            id: 3,
            title: "JLab Go Air Wireless",
            category: "Earphones",
            shareCounts: 450,
            ratings: 4.9,
        }

        ]
    }
]

const customerFeedback: customerFeedbackProps[] = [
    {
        id: 0,
        author: "Mark",
        affiliation: "Tech Enthusiast",
        image: "/placeholder/male.png",
        comment: "The shop has affordable items and lots of options to choose from."
    },
    {
        id: 1,
        author: "Sarah",
        affiliation: "Gadget Reviewer",
        image: "/placeholder/female.png",
        comment: "Amazing quality and fast delivery. Highly recommend this shop!"
    },
    {
        id: 2,
        author: "John",
        affiliation: "Professional Gamer",
        image: "/placeholder/male2.png",
        comment: "Great variety of gaming accessories. Found exactly what I needed."
    },
    {
        id: 3,
        author: "Emily",
        affiliation: "Student",
        image: "/placeholder/female2.png",
        comment: "Affordable prices and excellent customer service. Will shop again."
    },
    {
        id: 4,
        author: "Alex",
        affiliation: "Software Developer",
        image: "/placeholder/male2.png",
        comment: "Innovative gadgets and prompt support. My go-to shop for tech gear."
    },
    {
        id: 5,
        author: "Jessica",
        affiliation: "Photographer",
        image: "/placeholder/female.png",
        comment: "Impressed with the range of camera accessories. Very satisfied!"
    },
    {
        id: 6,
        author: "Michael",
        affiliation: "Blogger",
        image: "/placeholder/male.png",
        comment: "Fantastic deals and reliable products. A trusted shop for tech lovers."
    },
    {
        id: 7,
        author: "Sophia",
        affiliation: "Designer",
        image: "/placeholder/female2.png",
        comment: "Stylish and functional gadgets. Perfect for my design studio."
    },
    {
        id: 8,
        author: "David",
        affiliation: "Engineer",
        image: "/placeholder/male2.png",
        comment: "Top-notch electronics and quick delivery. Highly satisfied with my purchase."
    },
    {
        id: 9,
        author: "Emma",
        affiliation: "Content Creator",
        image: "/placeholder/female.png",
        comment: "Great selection of video gear. Excellent shopping experience!"
    }
];

const billingFormItems: billingFormItemsProps[] = [
    {
        id: 1,
        label: "First Name",
        type: "text",
        name: "firstName",
        required: true
    },
    {
        id: 2,
        label: "Last Name",
        type: "text",
        name: "lastName",
        required: true
    },
    {
        id: 3,
        label: "Email",
        type: "text",
        name: "email",
        required: true
    },
    {
        id: 4,
        label: "Birthday",
        type: "date",
        name: "birthday",
        min: "1960-01-01",
        max: maxDate,
        required: false
    },
    {
        id: 5,
        label: "Shipping Date",
        type: "date",
        name: "shippingDate",
        min: shippingDate,
        required: true
    },
]

const paymentMethodOptions: paymentMethodOptionsProps[] = [
    {
        id: 1,
        type: "radio",
        value: "Option1/MasterCard",
        payMethod: "MasterCard"
    },
    {
        id: 2,
        type: "radio",
        value: "Option2/Visa",
        payMethod: "Visa"
    },
    {
        id: 3,
        type: "radio",
        value: "Option3/Visa",
        payMethod: "Cryptocurrency"
    },
    {
        id: 4,
        type: "radio",
        value: "Option4/Visa",
        payMethod: "Cash on Delivery (COD)"
    },
]
export {
    NavDropDown, servicesList,
    socialMedia, trendsInfo,
    customerFeedback, billingFormItems,
    paymentMethodOptions
};
