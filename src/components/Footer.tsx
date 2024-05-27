import { useState } from "react";
import { socialMedia } from "src/constants";
import { MessageSentModal } from "./child";
import { Smile } from "lucide-react";
import { footerMessageTitle, messageSentContent } from "src/utilities";
import { Link } from "react-router-dom";

const Footer = () => {
    const [openMessage, setOpenMessage] = useState<boolean>(false);
    const handleOpen = () => {
        setOpenMessage(!openMessage);
    }
    const currYear = new Date().getFullYear();
    return (
        <footer className="bg-secondary text-white/80 w-full mx-auto">
            <div className="footer-container">
                <div className="footer-slogan">
                    <h1 className="font-bold text-[1.2em] text-center">
                        Get Updated with the latest Tech Gadgets
                    </h1>
                    <p className="text-[16px]">
                        Where innovation meets service excellence. Elevating your tech
                        experience, one gadget at a time.
                    </p>
                </div>
                <div className="text-center mx-auto mt-4 md:w-[200px] xl:w-[400px]">
                    <h1 className="font-bold text-[1.2em]">Quick Links</h1>
                    <ul className="flex flex-col gap-2 mt-4">
                        <Link to="/"><li className="hover:text-accent">Home</li></Link>
                        <Link to="contact"><li className="hover:text-accent">Contact Page</li></Link>
                        <Link to="shop"><li className="hover:text-accent">Shop</li></Link>
                    </ul>
                </div>
                <div className="flex flex-col gap-10 md:gap-2 items-center">
                    <div className="mt-4">
                        <h1 className="font-bold text-[1.2em]">
                            Subscribe to our Newsletter
                        </h1>
                        <div className="flex  items-center mt-2">
                            <input
                                className="newsletter-input rounded-tl-xl rounded-bl-xl"
                                placeholder="Enter your e-mail"
                                type="text"
                                name="newsletter"
                            />
                            <button
                                className="newsletter-send-button"
                                onClick={handleOpen}
                            >Send</button>
                            {openMessage && (<MessageSentModal
                                header={footerMessageTitle}
                                content={messageSentContent}
                                icon={Smile}
                                openModal={openMessage}
                                toggleModal={handleOpen} />)}
                        </div>
                    </div>
                    <div className="p-2">
                        <h1 className="font-bold text-[1.2em]">Follow Us for Updates!</h1>
                        <ul className="flex justify-center gap-3 my-2">
                            {socialMedia.map((soc) => (
                                <li key={soc.id}>
                                    {<soc.icon className="footer-socmed-icon" />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">
                <h1>Copyright &copy; {currYear} All Rights Reserved | </h1>
                <h1>Web Design Made by Bryan |</h1>
            </div>
        </footer>
    )
}

export default Footer;
