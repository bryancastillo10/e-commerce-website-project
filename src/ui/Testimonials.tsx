import { useState, useEffect } from "react";
import { customerFeedback } from "src/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const autoSlide: boolean = true;
  const autoSlideInterval: number = 3000;
  const handlePrevious = () => {
    setSlideIndex((index) =>
      index === 0 ? customerFeedback.length - 1 : index - 1
    );
  };

  const handleNext = () => {
    setSlideIndex((index) =>
      index === customerFeedback.length - 1 ? 0 : index + 1
    );
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(handleNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section id="testimonials" className="bg-[hsla(202,100%,35%,0.3)] p-4">
      <div className="section-container query-container">
        <div>
          <div className="title-container">
            <p className="section-subtitle">Testimonials</p>
            <h1 className="section-header tracking-tighter lg:tracking-wide">
              Feedback from our Customer
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mb-12 md:mb-6">
        <div className="overflow-hidden relative p-2 w-[90%] pb-8 md:pb-0">
          <div
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            className="flex relative transition-transform ease-out duration-1000"
          >
            {customerFeedback.map((cust) => (
              <div
                key={cust.id}
                className="pt-4 flex flex-col shrink-0 gap-2 w-full mx-auto"
              >
                <div
                  className="flex flex-col justify-evenly gap-6 md:gap-0
                border-2 border-white rounded-2xl p-8 lg:min-h-[250px] w-[80%]
                md:max-w-[50%] m-auto blue-glass text-secondary"
                >
                  <div className="text-lg text-pretty text-left md:text-justify font-medium p-2">
                    " {cust.comment} "
                  </div>
                  <div className="flex gap-1 items-center justify-center lg:justify-end mb-8">
                    <img
                      src={cust.image}
                      alt={cust.image}
                      className="rounded-full size-14"
                    />
                    <div className="text-sm italic px-4">
                      <p className="font-bold">{cust.author}</p>
                      <p className="font-light">{cust.affiliation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="flex items-center justify-between left-[-16px] right-[-16px]
            md:right-[100px] md:left-[100px] lg:right-[180px] lg:left-[180px] p-4 absolute inset-0"
          >
            <button
              onClick={handlePrevious}
              className="p-1 rounded-full text-black shadow-md bg-white/50 hover:bg-white"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={handleNext}
              className="p-1 rounded-full text-black shadow-md bg-white/50 hover:bg-white"
            >
              <ChevronRight size={40} />
            </button>
          </div>
          <div className="absolute bottom-0 md:bottom-6 left-0 right-0">
            <div className="flex justify-center items-center gap-2">
              {customerFeedback.map((_, i) => (
                <div
                  key={i}
                  className={`transition-all size-3 bg-white rounded-full
                                ${slideIndex === i ? "p-2" : "bg-opacity-50"}
                                `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
