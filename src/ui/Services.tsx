import { useState } from "react";
import { servicesList } from "../constants";
import { Button } from "../components";
import { useThemeContext } from "src/context/UseContexts";
import { SelectedCard } from "src/components/subcomponent";

const Services = () => {
  const { theme } = useThemeContext();
  const [cardIndex, setCardIndex] = useState<number | null>(null);
  const toggleOpenCard = (id: number) => {
    setCardIndex((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <section id="services" className="bg-[hsla(202,100%,35%,0.3)] p-4">
      <div className="section-container query-container pb-10">
        <div>
          <p className="section-subtitle">Services Offered</p>
          <h1 className="section-header mb-4">
            Building Trust in the Digital Market
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[90%] md:max-w-[88%] lg:max-w-full mx-auto">
          {servicesList.map((serve) => (
            <div
              key={serve.id}
              className="text-center duration-500 ease-out cursor-pointer hover:scale-110 hover:opacity-60"
              onClick={() => toggleOpenCard(serve.id)}
            >
              <div>
                <img
                  src={serve.cardImg}
                  alt={serve.cardImg}
                  className="object-cover rounded-tl-xl rounded-tr-xl shadow"
                />
              </div>
              <div
                className={`flex justify-center items-center gap-2 p-6 
                rounded-bl-xl rounded-br-xl
                min-h-[110px] shadow-md ${
                  theme
                    ? "bg-accent text-secondary"
                    : "bg-secondary text-primary"
                }`}
              >
                <h1 className="font-bold text-base tracking-wide min-w-fit">
                  {serve.title}
                </h1>
              </div>
              {cardIndex === serve.id && (
                <SelectedCard
                  {...serve}
                  openCard={cardIndex === serve.id}
                  handleCard={() => toggleOpenCard(serve.id)}
                />
              )}
            </div>
          ))}
        </div>

        <div className="my-10 text-center">
          <Button link="/shop" type="services">
            Let's Get It Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
