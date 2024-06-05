import { Contact, Services, Quotes } from "../ui";
import { QuoteGenContextProvider } from "src/context/QuotesContext";
import { ContactUsFormContextProvider } from "src/context/ContactUsFormContext";
import { pageTransition } from "src/utilities";
import "../styles/contactPage.css";

const ContactPage = () => {
  return (
    <>
      <ContactUsFormContextProvider>
        <Contact />
      </ContactUsFormContextProvider>
      <Services />
      <QuoteGenContextProvider>
        <Quotes />
      </QuoteGenContextProvider>
    </>
  );
};

export default pageTransition(ContactPage);
