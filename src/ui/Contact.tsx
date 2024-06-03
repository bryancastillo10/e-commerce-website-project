import { ContactForm, Trends, Modal } from "../components";
import { AddressSection } from "../components/subcomponent";
import { useContactFormContext } from "src/context/UseContexts";
import { messageSentTitle, messageSentContent } from "src/utilities";
import { Send } from "lucide-react";

const Contact = () => {
  const { openModal, toggleModal } = useContactFormContext();

  return (
    <section id="contact-form" className="pt-6 md:pt-10">
      <div className="section-container query-container relative md:px-8">
        <div>
          <p className="section-subtitle">Contact Us</p>
          <h1 className="section-header">Feel Free to Message Us</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[90%] mx-auto ">
        <div className="">
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
        </div>
        <div className="">
          <Trends />
          <AddressSection />
        </div>
      </div>
    </section>
  );
};

export default Contact;
