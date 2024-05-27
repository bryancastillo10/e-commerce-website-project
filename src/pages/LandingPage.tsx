import { Hero, About, Services, Sales } from "src/components";
import "src/styles/landingPageComponents.modules.css";
import { motion } from "framer-motion";

const LandingPage = () => {
    return (
        <motion.div>
            <Hero />
            <About />
            <Services />
            <Sales />
        </motion.div>
    )
}

export default LandingPage;
