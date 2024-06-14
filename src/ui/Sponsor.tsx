import { ReactComponent as Acer } from "../assets/acer.svg";
import { ReactComponent as Asus } from "../assets/asus.svg";
import { ReactComponent as Apple } from "../assets/apple.svg";
import { ReactComponent as Logitech } from "../assets/logitech.svg";
import { ReactComponent as Samsung } from "../assets/samsung.svg";
import { ReactComponent as Amazon } from "../assets/amazon.svg";

interface sponsorLogoProps {
  id: number;
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const sponsorLogo: sponsorLogoProps[] = [
  {
    id: 1,
    name: "Acer",
    icon: Acer,
  },
  {
    id: 2,
    name: "Asus",
    icon: Asus,
  },
  {
    id: 3,
    name: "Apple",
    icon: Apple,
  },
  {
    id: 4,
    name: "Samsung",
    icon: Samsung,
  },
  {
    id: 5,
    name: "Logitech",
    icon: Logitech,
  },
  {
    id: 6,
    name: "Amazon",
    icon: Amazon,
  },
];

const Sponsor = () => {
  return (
    <section className="bg-primary text-secondary mt-[-1px]">
      <article className="p-4">
        <div className="max-w-[85%] mx-auto font-light md:font-bold text-xl">
          <h1>Sponsored by:</h1>
        </div>
        <div className="max-w-[80%] mx-auto my-4 p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-8 justify-center items-center">
            {sponsorLogo.map((logo) => {
              const Icons = logo.icon;
              return (
                <div
                  key={logo.id}
                  className="size-[80px] lg:size-[120px] max-w-[70%] mx-auto fill-emerald-500 duration-500 ease-in-out hover:scale-110 hover:fill-emerald-300"
                >
                  <Icons />
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Sponsor;
