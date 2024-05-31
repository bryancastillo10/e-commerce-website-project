import Logo from "/images/laptop-and-smartphone.svg";
import { NavDropDown } from "src/constants";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Dropdown, DropdownTransition, Button, NavigationMobile } from "../components";


const Navbar = () => {
  return (
    <nav className="w-full border-b-2 shadow bg-secondary ">
      <div className="flex justify-between p-6 lg:max-w-[80%] lg:mx-auto">
        <div className="flex md:flex-col lg:flex-row md:gap-0 items-center lg:gap-2">
          <img src={Logo} alt={Logo} className="size-14" />
          <h1 className="font-bold lg:text-[20px] md:text-sm text-accent italic">Bry's Tech Shop</h1>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          {/* Home Dropdown */}
          <Menu>
            <MenuButton className="flex gap-0.5">Home <ChevronDown /></MenuButton>
            <DropdownTransition>
              <MenuItems anchor="bottom start" className="border-2 p-2 rounded-xl form-glass" >
                {NavDropDown.Home.map((nav) => (
                  <Dropdown key={nav.id} {...nav} />
                ))}
              </MenuItems>
            </DropdownTransition>
          </Menu>

          {/* Contact Dropdown */}
          <Menu>
            <MenuButton className="flex gap-0.5">Contact <ChevronDown /></MenuButton>

            <MenuItems anchor="bottom start" className="border-2 p-2 rounded-xl form-glass" >
              {NavDropDown.Contact.map((nav) => (
                <Dropdown key={nav.id} {...nav} />
              ))}
            </MenuItems>

          </Menu>

          {/* Shop Dropdown */}
          <Menu>
            <MenuButton className="flex gap-0.5">Shop <ChevronDown /></MenuButton>
            <MenuItems anchor="bottom start" className="border-2 p-2 rounded-xl form-glass" >
              {NavDropDown.Shop.map((nav) => (
                <Dropdown key={nav.id} {...nav} />
              ))}
            </MenuItems>
          </Menu>
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:flex lg:max-w-[200px] mx-10  items-center">
          <Button type="call">Shop</Button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center text-accent p-1 cursor-pointer
        duration-500 ease-out hover:bg-emerald-200/80 rounded-2xl">
          <NavigationMobile />
        </div>
      </div>
    </nav >
  )
}

export default Navbar;
