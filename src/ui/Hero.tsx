import HeroLogo from "/images/hero-main.png";
import { Button } from "../components";

const Hero = () => {
    return (
        <section id="home" className="border-none">
            <div className="flex flex-col-reverse md:flex-row justify-evenly items-center mb-4 lg:mx-auto">
                <div className="max-w-[90%] md:max-w-[50%] mx-auto p-2 md:p-0 md:mt-10 xl:p-0 lg:max-w-[40%] xl:max-w-[45%]">
                    <h1 className="font-bold text-4xl text-center leading-normal md:leading-tight md:text-left md:max-w-[70%] min-w-fit">The Tech Shop You Can Trust!</h1>
                    <p className="my-4 tracking-wide text-wrap text-center font-light text-base leading-normal p-2 md:text-left md:font-medium md:max-w-[85%]">
                        Premium tech gadgets at unbeatable prices. Your one-stop shop for
                        exciting deals
                    </p>
                    <div className="my-6 text-center md:text-left">
                        <Button type="call">Shop Now</Button>
                    </div>
                </div>

                <div className="pt-4 md:mr-14 lg:p-4 xl:p-10 xl:translate-x-[-100px] ">
                    <img src={HeroLogo} alt="company-logo" className="size-[220px] md:size-[270px] lg:size-[320px]" />
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#0072b2"
                    d="M0,256L40,245.3C80,235,160,213,240,213.3C320,213,400,235,480,213.3C560,192,640,128,720,117.3C800,107,880,149,960,192C1040,235,1120,277,1200,277.3C1280,277,1360,235,1400,213.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    stroke="#9ed0e6"
                    strokeWidth="0"
                ></path>
            </svg>
        </section >
    )
}

export default Hero;
