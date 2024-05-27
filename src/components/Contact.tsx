import { ContactForm, Trends, AddressSection, MessageSentModal } from "./child";
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
            <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-[90%] mx-auto ">
                <div className="max-w-[80%] md:max-w-full mx-auto col-span-2">
                    <ContactForm />
                    {openModal && <MessageSentModal
                        header={messageSentTitle}
                        content={messageSentContent}
                        icon={Send}
                        openModal={openModal}
                        toggleModal={toggleModal} />}
                </div>
                <div className="flex flex-col gap-2 justify-between md:ml-[-40px]
                items-center mt-10 md:mt-0 max-w-[90%] md:max-w-[95%] mx-auto">
                    <Trends />
                    <AddressSection />
                </div>
            </div>
        </section>
    )
}

export default Contact;
