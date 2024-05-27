import AboutImg from "/images/gadgets.png";


const About = () => {
    return (
        <section id="about">
            <div className="section-container query-container">
                <div>
                    <div className="about-title">
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
                <div className="about-img flex justify-center items-center md:max-w-[400px] md:m-auto">
                    <img src={AboutImg} alt="about-image" />
                </div>
            </div>
        </section>
    )
}

export default About;
