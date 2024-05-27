import NavLogo from "/images/laptop-and-smartphone.svg";
import { NavLinksDesktop, NavLinksMobile } from "./child";
import "./child/child.modules.css";


const Navbar = () => {
    return (
        <nav className="blue-glass nav-container  ">
            <div className="nav-subcontainer">
                <div className="flex items-center gap-2">
                    <img src={NavLogo} className="rounded-full bg-gray-200"
                        width={30}
                        height={30} alt="company-logo" />
                    <h1 className="text-white font-secondary">Bry's Tech Shop</h1>
                </div>

                <div className="hidden md:flex gap-4 items-center">
                    <NavLinksDesktop />
                </div>
                <div className="relative flex md:hidden">
                    <NavLinksMobile />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
