import { useState, useEffect } from "react";
import { useBillingContext } from "src/context/UseContexts";
import { fetchCountry } from "src/utilities";
import { billingFormItems, paymentMethodOptions } from "src/constants";
import { Input, TextArea, Select, PriceSummary } from "./subcomponent";
import InputDate from "./subcomponent/InputDate";
import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";

const BillingInfo = () => {
  const { handleSubmit, onChangeValues, isAccepted, handleAccepted } =
    useBillingContext();

  const [country, setCountry] = useState<string[]>([]);
  useEffect(() => {
    fetchCountry().then((countries) => {
      setCountry(countries);
    });
  }, []);
  const textInput = billingFormItems.filter(
    (field) => field.id >= 1 && field.id <= 3
  );
  const dateInput = billingFormItems.filter(
    (field) => field.id >= 4 && field.id <= 5
  );
  const payments = paymentMethodOptions.map((methods) => methods.payMethod);
  return (
    <form
      className="blue-glass lg:max-w-[75%] lg:mx-auto border p-8 md:p-4 space-y-6 rounded-xl shadow  text-primary blue-glass"
      onSubmit={handleSubmit}
    >
      <div className="text-center tracking-wide">
        <h1 className="w-full text-xl lg:text-2xl font-bold tracking-wider leading-tight text-secondary">
          Billing Form
        </h1>
        <article className="flex flex-col md:flex-row md:gap-8 justify-evenly md:my-8">
          {/* Column 1 */}
          <div className="">
            {textInput.map((bill) => (
              <div key={bill.id} className="py-4">
                <Input
                  id={bill.name}
                  type={bill.type}
                  placeholder={bill.placeholder}
                  required={bill.required}
                  onChange={onChangeValues}
                  errorMessage={bill.errorMessage}
                />
              </div>
            ))}
            {dateInput.map((bill) => (
              <div key={bill.id} className="py-4">
                <InputDate
                  id={bill.name}
                  type={bill.type}
                  label={bill.label}
                  min={bill.min}
                  max={bill.max}
                  required={bill.required}
                  errorMessage={bill.errorMessage}
                  onChange={onChangeValues}
                />
              </div>
            ))}
          </div>
          {/* Column 2 */}
          <div className="">
            <TextArea
              id="shippingAddress"
              label="Shipping Address"
              placeholder="Enter your shipping/billing address..."
              required={true}
              onChange={onChangeValues}
            />
            <div className="my-4">
              <Select
                id="country"
                label="country"
                required={true}
                errorMessage="Country is required"
                onChange={onChangeValues}
                options={country}
              />
            </div>
            <div className="my-4">
              <Select
                id="paymentMethod"
                label="payment method"
                required={true}
                errorMessage="Payment Method is required"
                onChange={onChangeValues}
                options={payments}
              />
            </div>
            <PriceSummary />
          </div>
        </article>
        <div className="mt-4 text-secondary">
          <label
            htmlFor="terms-agreement"
            className="font-light text-base text-sm"
          >
            <input
              className="focus:ring rounded-md focus:ring-primary"
              name="terms-agreement"
              type="checkbox"
              onChange={handleAccepted}
            />
            &nbsp; I accept the e-commerce privacy policy
          </label>
          <div className="text-center my-4">
            <motion.button
              whileTap={buttonAnimation.whileTap}
              whileHover={buttonAnimation.whileHover}
              transition={buttonAnimation.transition}
              type="submit"
              disabled={isAccepted === false}
              className="cursor-pointer bg-primary rounded-2xl font-bold px-4 py-2 tracking-wide w-[150px] text-secondary"
            >
              Place Order
            </motion.button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BillingInfo;
