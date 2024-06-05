import { ContactForm, Trends } from "../components";
import { AddressSection, Modal } from "../components/subcomponent";
import { useContactFormContext } from "src/context/UseContexts";
import { messageSentTitle, messageSentContent } from "src/utilities";
import { easeOut, motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  const { openModal, toggleModal } = useContactFormContext();

  return (
    <motion.section
      id="contact-form"
      className="pt-6 md:pt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: easeOut }}
    >
      <div className="section-container query-container relative md:px-8">
        <div>
          <p className="section-subtitle text-center md:text-left">
            Contact Us
          </p>
          <h1 className="section-header text-center md:text-left">
            Feel Free to Message Us
          </h1>
        </div>
      </div>
      <div
        className="grid grid-cols-1 justify-evenly
       items-center md:grid-cols-2 max-w-[80%] mx-auto "
      >
        <article>
          <ContactForm />
          {openModal && (
            <Modal
              header={messageSentTitle}
              content={messageSentContent}
              icon={Send}
              openModal={openModal}
              toggleModal={toggleModal}
            />
          )}
        </article>
        <div className="grid grid-cols-1 gap-2 lg:w-[70%] mx-auto mb-8">
          <div>
            <Trends />
          </div>
          <div>
            <AddressSection />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
