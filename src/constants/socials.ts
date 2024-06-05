import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";

interface socialMediaProps {
  id: number;
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

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

export { socialMedia };
