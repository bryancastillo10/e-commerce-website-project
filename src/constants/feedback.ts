interface customerFeedbackProps {
  id: number;
  author: string;
  affiliation: string;
  image: string;
  comment: string;
}

const customerFeedback: customerFeedbackProps[] = [
  {
    id: 0,
    author: "Mark",
    affiliation: "Tech Enthusiast",
    image: "/placeholder/male.png",
    comment:
      "The shop has affordable items and lots of options to choose from.",
  },
  {
    id: 1,
    author: "Sarah",
    affiliation: "Gadget Reviewer",
    image: "/placeholder/female.png",
    comment: "Amazing quality and fast delivery. Highly recommend this shop!",
  },
  {
    id: 2,
    author: "John",
    affiliation: "Professional Gamer",
    image: "/placeholder/male2.png",
    comment:
      "Great variety of gaming accessories. Found exactly what I needed.",
  },
  {
    id: 3,
    author: "Emily",
    affiliation: "Student",
    image: "/placeholder/female2.png",
    comment:
      "Affordable prices and excellent customer service. Will shop again.",
  },
  {
    id: 4,
    author: "Alex",
    affiliation: "Software Developer",
    image: "/placeholder/male2.png",
    comment:
      "Innovative gadgets and prompt support. My go-to shop for tech gear.",
  },
  {
    id: 5,
    author: "Jessica",
    affiliation: "Photographer",
    image: "/placeholder/female.png",
    comment: "Impressed with the range of camera accessories. Very satisfied!",
  },
  {
    id: 6,
    author: "Michael",
    affiliation: "Blogger",
    image: "/placeholder/male.png",
    comment:
      "Fantastic deals and reliable products. A trusted shop for tech lovers.",
  },
  {
    id: 7,
    author: "Sophia",
    affiliation: "Designer",
    image: "/placeholder/female2.png",
    comment: "Stylish and functional gadgets. Perfect for my design studio.",
  },
  {
    id: 8,
    author: "David",
    affiliation: "Engineer",
    image: "/placeholder/male2.png",
    comment:
      "Top-notch electronics and quick delivery. Highly satisfied with my purchase.",
  },
  {
    id: 9,
    author: "Emma",
    affiliation: "Content Creator",
    image: "/placeholder/female.png",
    comment: "Great selection of video gear. Excellent shopping experience!",
  },
];

export { customerFeedback };
