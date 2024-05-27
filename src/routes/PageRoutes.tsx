import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage, ContactPage, ShopPage } from "src/pages";
import { About, Services, Sales, Shop, CheckOut } from "src/components";
import { Contact, Quotes, Testimonials } from "src/components";
import { NotFound } from ".";
import { AnimatePresence } from "framer-motion";
import { BillingContextProvider } from "src/context/BillingInfoContext";

const PageRoutes = () => {
    const location = useLocation();

    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<LandingPage />}>
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="sales" element={<Sales />} />
                    </Route>
                    <Route path="contact" element={<ContactPage />}>
                        <Route path="contact-form" element={<Contact />} />
                        <Route path="quotes" element={<Quotes />} />
                        <Route path="testimonials" element={<Testimonials />} />
                        <Route />
                    </Route>
                    <Route path="shop" element={<ShopPage />}>
                        <Route path="shop-items" element={<Shop />} />
                        <Route path="sales" element={<Sales />} />
                    </Route>
                    <Route path="checkout" element={
                        <BillingContextProvider>
                            <CheckOut />
                        </BillingContextProvider>
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default PageRoutes
