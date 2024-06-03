// import { motion } from "framer-motion";
// import { buttonAnimation } from "src/utilities/animation";
import { useContactFormContext } from "src/context/UseContexts";
import { Input, SelectCountry, TextArea } from "./subcomponent";
import { contactFields } from "src/constants";

const ContactForm = () => {
  const { onChangeValues, handleSubmit, allFiledsAreFilled } =
    useContactFormContext();
  return (
    <section className="p-6 dark:text-gray-800">
      <form
        className="w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow blue-glass"
        onSubmit={handleSubmit}
      >
        <h1 className="w-full text-xl font-bold leading-tight text-secondary">
          Open to Feedback
        </h1>

        {contactFields.map((contact) => (
          <div key={contact.id}>
            <Input
              id={contact.id}
              type={contact.type}
              placeholder={contact.placeholder}
              onChange={onChangeValues}
              required={contact.required}
            />
          </div>
        ))}

        <div className="flex items-center text-secondary gap-2">
          <label>Country</label>
          <SelectCountry
            id="country"
            required={true}
            onChange={onChangeValues}
          />
        </div>

        <div>
          <TextArea
            id="message"
            placeholder="Enter your message..."
            required={true}
            onChange={onChangeValues}
          />
        </div>
        <button
          type="submit"
          disabled={allFiledsAreFilled === false}
          className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 
          bg-primary hover:ring-accent dark:text-gray-50"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
