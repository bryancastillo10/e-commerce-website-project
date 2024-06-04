import { useState, useEffect } from "react";
import { useBillingContext } from "src/context/UseContexts";
import { Field, Label, Textarea, Select, Legend, Checkbox } from '@headlessui/react';
import { Check } from "lucide-react";
import { fetchCountry } from "src/utilities";
import { billingFormItems, paymentMethodOptions } from "src/constants";
import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";
import {PriceSummary} from "./subcomponent";


const BillingInfo = () => {
    const { handleSubmit, onChangeValues, isAccepted, handleAccepted } = useBillingContext();

    const [country, setCountry] = useState<string[]>([]);
    useEffect(() => {
        fetchCountry().then(countries => {
            setCountry(countries);
        })
    }, []);
    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-2">
                {billingFormItems.map((items) => (
                    <Field key={items.id} className="form-field">
                        <input
                            type={items.type}
                            name={items.name}
                            placeholder=""
                            min={items.min}
                            max={items.max}
                            onChange={onChangeValues}
                            className="form-billing-input text-primary bg-transparent border-0 border-b-2 appearance-none
                            focus:ring-0 focus:outline-none border-white/80" />
                        <Label className="form-label text-primary">{items.label}</Label>
                        <span className="text-sm text-danger hidden" id="error">Name is required</span>
                    </Field>
                ))}

                <Field className="form-field-textarea">
                    <Label htmlFor="shippingAddress" className="origin-[0%] text-primary">Shipping Address</Label>
                    <Textarea name="shippingAddress"
                        className="bg-transparent border-2 rounded-2xl resize-none min-h-[100px]
                        text-accent focus:outline-none focus:ring-0 focus:border-primary indent-2 p-1"
                        onChange={onChangeValues} />
                </Field>

                <Field className="mt-8 relative w-full mb-5">
                    <Select className="form-billing-select bg-transparent
                     border-0 border-b-2 appearance-none
                    focus:outline-none focus:ring-0 focus:border-black"
                        name="country"
                        onChange={onChangeValues}>
                        {country.map((countrylist) => (
                            <option className="bg-primary text-white/80"
                                key={countrylist} value={countrylist}>{countrylist}</option>
                        ))}
                    </Select>
                    <Label className="form-label">Select a country</Label>
                    <span className="text-sm text-danger hidden" id="error">Country has to be selected</span>
                </Field>
                <Field className="relative z-0 mb-5 p-1 w-full">
                    <Legend className="absolute  transform scale-75 -top-3 origin-0">
                        Select a Payment
                    </Legend>
                    <div className="pt-3 flex flex-col items-start max-w-[90%] mx-auto">
                        {paymentMethodOptions.map((method) => (
                            <Label key={method.id}>
                                <input
                                    type={method.type}
                                    name="paymentMethod"
                                    value={method.payMethod}
                                    onChange={onChangeValues}
                                    className="mr-2 text-sm border-2  focus:border-none
                                    border-secondary focus:bg-blue-500"/>
                                {method.payMethod}
                            </Label>
                        ))}
                    </div>
                </Field>
                <PriceSummary />
                <div className="mt-2 flex justify-center items-center gap-2">
                    <Checkbox checked={isAccepted} onChange={handleAccepted}
                        className="size-5 rounded-md bg-transparent 
                        p-1 ring-1 ring-secondary border-2 border-secondary
                        ring-inset data-[checked]:bg-white/80">
                        <Check size={11}
                            className={`text-secondary text-center ${isAccepted ? "block" : "hidden"}`} />
                    </Checkbox>
                    <span>I accept the e-commerce policy</span>
                </div>
                <div className="max-w-[200px] mx-auto my-4">
                    <motion.button
                        className="btn-design"
                        whileTap={buttonAnimation.whileTap}
                        whileHover={buttonAnimation.whileHover}
                        transition={buttonAnimation.transition}>
                        Submit
                    </motion.button>
                </div>
            </div>
        </form>
    )
}

export default BillingInfo;
