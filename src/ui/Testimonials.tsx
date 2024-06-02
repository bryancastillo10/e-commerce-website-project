import { useState, useEffect } from "react";
import { customerFeedback } from "src/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const autoSlide: boolean = true;
    const autoSlideInterval: number = 3000;
    const handlePrevious = () => {
        setSlideIndex((index) => (index === 0 ? customerFeedback.length - 1 : index - 1));
    }

    const handleNext = () => {
        setSlideIndex((index) => (index === customerFeedback.length - 1 ? 0 : index + 1));
    }
    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(handleNext, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [])

    return (
        <section id="testimonials" className="bg-[hsla(202,100%,35%,0.3)] p-4">
            <div className="section-container query-container" >
                <div>
                    <div className="title-container">
                        <p className="section-subtitle">Testimonials</p>
                        <h1 className="section-header tracking-tighter lg:tracking-wide">Feedback from our Customer</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mb-12 md:mb-6">
                <div className="testimonials-container pb-8 md:pb-0">
                    <div style={{ transform: `translateX(-${slideIndex * 100}%)` }}
                        className="animate-testimonials-container">
                        {customerFeedback.map((cust) => (
                            <div key={cust.id} className="testimonials-layout">
                                <div className="testimonials-card blue-glass text-secondary">
                                    <div className="text-lg text-pretty text-left md:text-justify font-medium p-2">
                                        " {cust.comment} "
                                    </div>
                                    <div className="flex gap-1 items-center justify-center lg:justify-end mb-8">
                                        <img src={cust.image} alt={cust.image} className="rounded-full size-14" />
                                        <div className="text-sm italic px-4">
                                            <p className="font-bold">{cust.author}</p>
                                            <p className="font-light">{cust.affiliation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="testimonials-btn-section">
                        <button onClick={handlePrevious} className="slide-btn"><ChevronLeft size={40} /></button>
                        <button onClick={handleNext} className="slide-btn"><ChevronRight size={40} /></button>
                    </div>
                    <div className="slide-indicator-position">
                        <div className="slide-indicator">
                            {customerFeedback.map((_, i) => (
                                <div key={i} className={`transition-all size-3 bg-white rounded-full
                                ${slideIndex === i ? "p-2" : "bg-opacity-50"}
                                `} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials;
