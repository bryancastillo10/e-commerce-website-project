import { useState } from "react";
import { Menu as HamburgerMenu, X } from "lucide-react";
import { Home, Phone, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NavigationMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="relative duration-500" onClick={toggleMenu}>
        {openMenu ? <X size={34} /> : <HamburgerMenu size={34} />}
      </div>
      {openMenu ? (
        <motion.div
          className="absolute  p-4 duration-500 ease-out
                form-glass overflow-x-hidden rounded-md 
                top-[12%] right-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center p-1 gap-4">
            <div
              className="flex flex-col items-center cursor-pointer hover:bg-sky-500 rounded-xl p-1"
              onClick={() => navigate("/")}
            >
              <Home />
              Home
            </div>

            <div
              className="flex flex-col items-center cursor-pointer hover:bg-sky-500 rounded-xl p-1"
              onClick={() => navigate("/contact")}
            >
              <Phone />
              Contact
            </div>

            <div
              className="flex flex-col items-center cursor-pointer hover:bg-sky-500 rounded-xl p-1"
              onClick={() => navigate("/shop")}
            >
              <Store />
              Shop
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavigationMobile;
