import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage, ContactPage, ShopPage } from "src/pages";
import { Hero, About, Testimonials } from "src/ui";
import { Contact, Services, Quotes } from "src/ui";
import { Shop, Sales, CheckOut } from "src/ui";
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
                        <Route path="home" element={<Hero/>}/>
                        <Route path="about" element={<About />} />
                        <Route path="testimonials" element={<Testimonials />} />
                    </Route>
                    <Route path="contact" element={<ContactPage />}>
                        <Route path="contact-form" element={<Contact />} />
                        <Route path="services" element={<Services />} />
                        <Route path="quotes" element={<Quotes />} />
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
