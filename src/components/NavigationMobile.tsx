import { useState } from "react";
import { Menu as HamburgerMenu, X } from "lucide-react";
import { Home, Phone, Store } from "lucide-react";


const NavigationMobile = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    return (<>
        <div className="relative duration-500" onClick={toggleMenu}>
            {openMenu ? <X size={34} /> : <HamburgerMenu size={34} />}
        </div>
        {openMenu ?
            <div className={`absolute  p-4 duration-500 ease-out
                form-glass overflow-x-hidden rounded-md 
                top-[12%] ${openMenu ? "right-0" : "right-[-200px]"}`}>
                <ul className="flex justify-center items-center p-1 gap-4">
                    <li className="flex flex-col place-items-center hover:bg-emerald-200/80 p-1 rounded-md">
                        <Home />Home
                    </li>

                    <li className="flex flex-col place-items-center hover:bg-emerald-200/80 p-1 rounded-md">
                        <Phone />Contact
                    </li>

                    <li className="flex flex-col place-items-center hover:bg-emerald-200/80 p-1 rounded-md">
                        <Store />Shop
                    </li>
                </ul>
            </div>

            : ""}
    </>
    )
}

export default NavigationMobile;
