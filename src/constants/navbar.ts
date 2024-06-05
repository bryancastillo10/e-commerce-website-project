interface NavItem {
  id: number;
  title: string;
  subTitle: string;
  link: string;
}

interface NavDropDownProps {
  Home: NavItem[];
  Contact: NavItem[];
  Shop: NavItem[];
}

const NavDropDown: NavDropDownProps = {
  Home: [
    {
      id: 1,
      title: "About",
      subTitle: "Shop Details",
      link: "about",
    },
    {
      id: 2,
      title: "Testimonials",
      subTitle: "Customer Feedback",
      link: "testimonials",
    },
    {
      id: 3,
      title: "Sales",
      subTitle: "Latest Announcements",
      link: "sales",
    },
  ],

  Contact: [
    {
      id: 1,
      title: "Message Us",
      subTitle: "Feel Free to Approach us",
      link: "contact-form",
    },
    {
      id: 2,
      title: "Services",
      subTitle: "Services We Can Offer",
      link: "services",
    },
    {
      id: 3,
      title: "Get Quotes",
      subTitle: "Random Quote Generator",
      link: "quotes",
    },
  ],
  Shop: [
    {
      id: 1,
      title: "Shop Now",
      subTitle: "Check Our Online Store",
      link: "shop-items",
    },
    {
      id: 2,
      title: "Sales",
      subTitle: "Get the Latest Update",
      link: "sales",
    },
  ],
};

export { NavDropDown };
