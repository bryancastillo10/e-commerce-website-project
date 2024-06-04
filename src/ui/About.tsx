import AboutImg from "/images/gadgets.png";
import AboutImg2 from "../assets/laptop-and-smartphone.svg";

const About = () => {
  return (
    <section id="about" className="mt-[-1px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0072b2"
          fillOpacity="1"
          d="M0,64L40,58.7C80,53,160,43,240,64C320,85,400,139,480,133.3C560,128,640,64,720,64C800,64,880,128,960,144C1040,160,1120,128,1200,117.3C1280,107,1360,117,1400,122.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className="section-container query-container relative mt-[-50px] 2xl:mt-[-100px] ">
        <div className="title-container">
          <div className="flex flex-col gap-2 md:gap-0">
            <p className="section-subtitle">About Us</p>
            <h1 className="section-header">
              One Stop Tech Shop for the Masses
            </h1>
          </div>
          <div className="section-content">
            <p>
              Our team of tech enthusiasts carefully curates our selection to
              bring you the best and most exciting products on the market.
            </p>
            <br />
            <p>
              We understand that staying ahead of the curve is important, which
              is why we constantly update our inventory with cutting-edge
              devices and accessories.
            </p>
          </div>
        </div>
        <div className="about-img">
          <img src={AboutImg} alt="about-image" />
          <img
            src={AboutImg2}
            alt="about-image-2"
            width="420"
            className="hidden xl:block absolute top-0 right-[-30px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
