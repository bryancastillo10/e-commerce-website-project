import HeroLogo from "/images/laptop-and-smartphone.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonAnimation, pathVariants } from "src/utilities/animation";

const Hero = () => {
    return (
        <section id="home" className="pt-20">
            <div className="w-full md:max-w-[90%] xl:ml-[-5%] mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="hero-img">
                        <img src={HeroLogo} alt="company-logo" width={300} height={300} />
                    </div>
                    <div className="hero-caption mt-2">
                        <h1 className="hero-header">The Tech Shop You Can Trust!</h1>
                        <p className="hero-subheader">
                            Premium tech gadgets at unbeatable prices. Your one-stop shop for
                            exciting deals
                        </p>
                        <Link to="shop">
                            <motion.button
                                whileTap={buttonAnimation.whileTap}
                                whileHover={buttonAnimation.whileHover}
                                transition={buttonAnimation.transition}
                                className="btn-design">
                                Shop Now
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <motion.path
                    variants={pathVariants}
                    initial="initial"
                    animate="writing"
                    fill="#0072B2"
                    fillOpacity="0.8"
                    d="M0,256L40,245.3C80,235,160,213,240,213.3C320,213,400,235,480,213.3C560,192,640,128,720,117.3C800,107,880,149,960,192C1040,235,1120,277,1200,277.3C1280,277,1360,235,1400,213.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    stroke="#fff"
                    strokeWidth="2"
                ></motion.path>
            </svg>
        </section >
    )
}

export default Hero;
