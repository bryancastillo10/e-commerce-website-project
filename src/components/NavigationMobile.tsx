import { useState } from "react";
import { Menu as HamburgerMenu, X } from "lucide-react";
import { Home, Phone, Store } from "lucide-react";
import { Link } from "react-router-dom";

const NavigationMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="relative duration-500" onClick={toggleMenu}>
        {openMenu ? <X size={34} /> : <HamburgerMenu size={34} />}
      </div>
      {openMenu ? (
        <div
          className={`absolute  p-4 duration-500 ease-out
                form-glass overflow-x-hidden rounded-md 
                top-[12%] ${openMenu ? "right-0" : "right-[-200px]"}`}
        >
          <ul className="flex justify-center items-center p-1 gap-4">
            <li className="hover:bg-emerald-200/80 p-1 rounded-md">
              <Link to="/">
                <div className="flex flex-col items-center">
                  <Home />
                  Home
                </div>
              </Link>
            </li>

            <li className="hover:bg-emerald-200/80 p-1 rounded-md">
              <Link to="contact">
                <div className="flex flex-col items-center">
                  <Phone />
                  Contact
                </div>
              </Link>
            </li>

            <li className="hover:bg-emerald-200/80 p-1 rounded-md">
              <Link to="shop">
                <div className="flex flex-col items-center">
                  <Store />
                  Shop
                </div>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavigationMobile;
