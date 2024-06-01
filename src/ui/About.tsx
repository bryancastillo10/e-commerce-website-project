import AboutImg from "/images/gadgets.png";
import AboutImg2 from "/images/laptop-and-smartphone.svg";

const About = () => {
    return (
        <section id="about">
            <div className="section-container query-container relative ">
                <div className="title-container">
                    <div className="flex flex-col gap-2 md:gap-0">
                        <p className="section-subtitle">About Us</p>
                        <h1 className="section-header">One Stop Tech Shop for the Masses</h1>
                    </div>
                    <div className="section-content">
                        <p>Our team of tech enthusiasts carefully curates our selection to bring you the best and most exciting products on the market.
                        </p>
                        <br />
                        <p>We understand that staying ahead of the curve is important, which is why we constantly update our inventory with cutting-edge devices and accessories.
                        </p>
                    </div>
                </div>
                <div className="about-img">
                    <img src={AboutImg} alt="about-image" />
                    <img src={AboutImg2} alt="about-image-2" width="420"
                        className="hidden xl:block absolute top-0 right-[-30px]" />
                </div>
            </div>
        </section>
    )
}

export default About;
