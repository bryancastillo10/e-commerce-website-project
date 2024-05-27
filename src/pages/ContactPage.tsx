import { Contact, Quotes, Testimonials } from "src/components";
import { ContactUsFormContextProvider } from "src/context/ContactUsFormContext";
import { QuoteGenContextProvider } from "src/context/QuotesContext";
import { motion } from "framer-motion";
import "src/styles/contactPageComponents.modules.css";

const ContactPage = () => {
    return (
        <motion.div>
            <ContactUsFormContextProvider>
                    <Contact />
            </ContactUsFormContextProvider>
            <QuoteGenContextProvider>
                <Quotes />
            </QuoteGenContextProvider>
            <Testimonials />
        </motion.div>
    )
}

export default ContactPage;
