import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { servicesList } from "../constants";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";

const Services = () => {
    const [openCard, setOpenCard] = useState<number | null>(null);
    const handleRotate = (id: number) => {
        setOpenCard(prevIndex => (prevIndex === id ? null : id));
    }

    return (
        <section id="services">
            <div className="section-container query-container pb-10">
                <div>
                    <p className="section-subtitle">Services Offered</p>
                    <h1 className="section-header mb-4">
                        Building Trust in the Digital Market
                    </h1>
                </div>
                <div className="services-card-container">
                    {servicesList.map((serve, index) => (
                        <Disclosure as="div" key={serve.id} className="blue-glass services-disclosure">
                            <DisclosureButton className="services-disclosure-btn" onClick={() => handleRotate(index)}>
                                <serve.icon className={`duration-1000 ease-in-out ${openCard === index ? "scale-150" : "scale-100"}`} />
                                <span className="text-sm font-medium">
                                    {serve.title}
                                </span>
                                <ChevronDown size={20} className={` duration-500 ease-linear  ${openCard === index ? "rotate-0" : "rotate-180"}`}
                                />
                            </DisclosureButton>
                            <Transition enter="transition-enter" enterFrom="transition-enter-from" enterTo="transition-enter-to"
                                leave="transition-leave" leaveFrom="transition-leave-from" leaveTo="transition-leave-to">
                                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                                    {serve.tooltip}
                                </DisclosurePanel>
                            </Transition>
                        </Disclosure>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <Link to="shop">
                        <motion.button
                            whileTap={buttonAnimation.whileTap}
                            whileHover={buttonAnimation.whileHover}
                            transition={buttonAnimation.transition}
                            className="btn-design">
                            Let's Get It Started
                        </motion.button>
                    </Link>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#0072b2"
                    fillOpacity="0.8"
                    d="M0,256L24,234.7C48,213,96,171,144,149.3C192,128,240,128,288,154.7C336,181,384,235,432,256C480,277,528,267,576,261.3C624,256,672,256,720,224C768,192,816,128,864,90.7C912,53,960,43,1008,64C1056,85,1104,139,1152,176C1200,213,1248,235,1296,213.3C1344,192,1392,128,1416,96L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
                ></path>
            </svg>
        </section>
    )
}

export default Services;
