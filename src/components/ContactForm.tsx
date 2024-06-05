import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";
import { useContactFormContext } from "src/context/UseContexts";
import { Input, Select, TextArea } from "./subcomponent";
import { contactFields } from "src/constants";
import { useFetchCountry } from "src/hooks";

const ContactForm = () => {
  const { onChangeValues, handleSubmit, allFieldsAreFilled } =
    useContactFormContext();
  const country = useFetchCountry();

  return (
    <section className="my-4 md:p-4 lg:p-8 text-primary">
      <form
        className="border p-8 md:p-4  space-y-6 rounded-md shadow blue-glass"
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
              errorMessage={contact.errorMessage}
            />
          </div>
        ))}

        <div>
          <Select
            id="country"
            label="country"
            required={true}
            errorMessage="Country is required"
            onChange={onChangeValues}
            options={country}
          />
        </div>

        <div>
          <TextArea
            id="message"
            label="Your message"
            placeholder="Enter your message..."
            required={true}
            onChange={onChangeValues}
          />
        </div>
        <div className="text-center">
          <motion.button
            whileTap={buttonAnimation.whileTap}
            whileHover={buttonAnimation.whileHover}
            transition={buttonAnimation.transition}
            type="submit"
            disabled={allFieldsAreFilled === false}
            className="cursor-pointer bg-primary rounded-2xl font-bold px-4 py-2 tracking-wide w-[150px] text-secondary"
          >
            Send
          </motion.button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
