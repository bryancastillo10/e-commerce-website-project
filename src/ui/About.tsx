import AboutImg from "/images/gadgets.png";


const About = () => {
    return (
        <section id="about">
            <div className="section-container query-container">
                <div className="lg:max-w-[84%] xl:max-w-full lg:mx-auto">
                    <div className="flex flex-col gap-2">
                        <p className="font-light text-base md:text-[18px]">About Us</p>
                        <h1 className="font-bold text-2xl md:text-3xl tracking-wide">One Stop Tech Shop for the Masses</h1>
                    </div>
                    <div className="mt-10 text-pretty text-base md:text-[18px] md:font-medium tracking-wide font-light text-center leading-tighter md:text-justify">
                        <p>Our team of tech enthusiasts carefully curates our selection to bring you the best and most exciting products on the market.
                        </p>
                        <br />
                        <p>We understand that staying ahead of the curve is important, which is why we constantly update our inventory with cutting-edge devices and accessories.
                        </p>
                    </div>
                </div>
                <div className="about-img flex justify-center items-center md:max-w-[400px] md:m-auto">
                    <img src={AboutImg} alt="about-image" />
                </div>
            </div>
        </section>
    )
}

export default About;
