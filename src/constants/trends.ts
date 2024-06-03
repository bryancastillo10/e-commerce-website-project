interface trendsArray {
  id: number;
  title: string;
  category: string;
  shareCounts: number;
  ratings: number;
}

interface trendsInfoProps {
  name: string;
  posts: trendsArray[];
}

const trendsInfo: trendsInfoProps[] = [
  {
    name: "Popular",
    posts: [
      {
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
      },
      {
        id: 3,
        title: "Lenovo ThinkPad L14",
        category: "Promotion",
        shareCounts: 300,
        ratings: 4.8,
      },
    ],
  },
  {
    name: "FAQs",
    posts: [
      {
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
    ],
  },
  {
    name: "Trending",
    posts: [
      {
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
      },
    ],
  },
];

export { trendsInfo };
