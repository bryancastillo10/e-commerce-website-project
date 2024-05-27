import { useEffect, useState } from 'react';
import { Field, Label, Select, Textarea } from '@headlessui/react';
import { fetchCountry } from 'src/utilities';
import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";
import { useContactFormContext } from 'src/context/UseContexts';
import { useThemeContext } from 'src/context/UseContexts';

const ContactForm = () => {
    const { onChangeValues, handleSubmit, allFiledsAreFilled } = useContactFormContext();
    const [country, setCountry] = useState<string[]>([]);
    const { theme } = useThemeContext();
    useEffect(() => {
        fetchCountry().then(countries => {
            setCountry(countries);
        })
    }, [])
    return (
        <div className="form-container form-glass">
            <h1 className="form-title">We are Open to your Feedback</h1>
            <form onSubmit={handleSubmit}>
                <div className="mt-2">
                    <Field className="relative z-0 w-full mb-5">
                        <input className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-secondary border-white/80"
                            type="text" placeholder="" onChange={onChangeValues} name="givenName" required />
                        <Label className="absolute duration-300 top-3 -z-1 origin-0 text-secondary">Name</Label>
                    </Field>

                    <Field className="relative z-0 w-full mb-5">
                        <input className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-secondary border-white/80"
                            type="text" placeholder="" onChange={onChangeValues} name="email" required />
                        <Label className="absolute duration-300 top-3 -z-1 origin-0 text-secondary">Email</Label>
                    </Field>

                    <Field className="relative z-0 w-full mb-5">
                        <input className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-secondary border-white/80"
                            type="text" placeholder="" onChange={onChangeValues} name="subject" required />
                        <Label className="absolute duration-300 top-3 -z-1 origin-0 text-secondary">Subject</Label>
                    </Field>

                    <Field className="mt-8 relative w-full mb-5">
                        <Select className="form-billing-select bg-transparent
                     border-0 border-b-2 appearance-none
                    focus:outline-none focus:ring-0 focus:border-black"
                            name="country"
                            onChange={onChangeValues}>
                            {country.map((countrylist) => (
                                <option className="bg-secondary text-white/80"
                                    key={countrylist} value={countrylist}>{countrylist}</option>
                            ))}
                        </Select>
                        <Label className="form-label">Your Country</Label>
                        <span className="text-sm text-danger hidden" id="error">Country has to be selected</span>
                    </Field>

                    <Field className="form-field-textarea">
                        <Label htmlFor="message" className="origin-[0%] text-white/80">Message</Label>
                        <Textarea name="message"
                            className={`bg-transparent border-2 rounded-2xl resize-none min-h-[100px]
                        focus:outline-none focus:ring-0 focus:border-secondary indent-2 p-1 ${theme ? "text-accent" : "text-secondary"}`}
                            onChange={onChangeValues} />
                    </Field>

                    <div className="mt-8 max-w-[200px] mx-auto">
                        <motion.button
                            type="submit"
                            disabled={allFiledsAreFilled === false}
                            whileTap={buttonAnimation.whileTap}
                            whileHover={buttonAnimation.whileHover}
                            transition={buttonAnimation.transition}
                            className='btn-design'>
                            Submit
                        </motion.button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;

