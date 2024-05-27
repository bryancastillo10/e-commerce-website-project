import { useState } from "react";
import { Menu, MenuButton, Transition, MenuItems, MenuItem } from "@headlessui/react";
import { Link } from "react-router-dom";
import { SquareMenu, SquareX, Home, Phone, ShoppingCart } from "lucide-react";


const NavLinksMobile = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const toggleStyle = "text-white hover:text-accent duration-500 ease-in-out";
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <div onClick={toggleMenu}
            className="absolute right-0 top-1 overflow-x-hidden">
            <Menu>
            {openMenu ? <MenuButton className={toggleStyle}> <SquareX size={30}/></MenuButton> :
                        <MenuButton className={toggleStyle}><SquareMenu size={30} /></MenuButton>}
                <Transition
                    enter="transition ease-out duration-75"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <MenuItems anchor="bottom end"
                        className="menu-items-container blue-glass">
                        <MenuItem>
                            <div className="group menu-items-btn">
                                <Home size={20} />
                                <Link to="/">Home</Link>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className="group menu-items-btn">
                                <Phone size={20} />
                                <Link to="contact">Contact Us</Link>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className="group menu-items-btn">
                                <ShoppingCart size={20} />
                                <Link to="shop">Shop</Link>
                            </div>
                        </MenuItem>
                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    )
}

export default NavLinksMobile;
