import { Hero, Sponsor, About, Sales, Testimonials } from "src/ui";
import { pageTransition } from "src/utilities";
import "../styles/landingPage.css";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Sponsor />
      <About />
      <Testimonials />
      <Sales />
    </>
  );
};

export default pageTransition(LandingPage);
