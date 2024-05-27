import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { NavDropDown } from "src/constants";
import { ChevronDown } from "lucide-react";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const NavLinks = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex gap-8">
                {/* Home Section */}
                <Popover>
                    <PopoverButton className="nav-popover">
                        <LinkRouter to="/">Home</LinkRouter>
                        <ChevronDown size={12} />
                    </PopoverButton>
                    <Transition enter="transition-enter" enterFrom="transition-enter-from" enterTo="transition-enter-to"
                        leave="transition-leave" leaveFrom="transition-leave-from" leaveTo="transition-leave-to">
                        <PopoverPanel anchor="bottom"
                            className="custom-divide custom-anchor-gap blue-glass">
                            {NavDropDown.Home.map((nav) => (
                                <div key={nav.id} className="p-1">
                                    <LinkScroll className="popover-link" to={nav.link}>
                                        <p className="font-semibold">{nav.title}</p>
                                        <p className="text-yellow-200">{nav.subTitle}</p>
                                    </LinkScroll>
                                </div>
                            ))
                            }
                        </PopoverPanel>
                    </Transition>
                </Popover>

                {/* Contact Section */}
                <Popover>
                    <PopoverButton className="nav-popover">
                        <LinkRouter to="/contact">Contact Us</LinkRouter>
                        <ChevronDown size={12} />
                    </PopoverButton>
                    <Transition enter="transition-enter" enterFrom="transition-enter-from" enterTo="transition-enter-to"
                        leave="transition-leave" leaveFrom="transition-leave-from" leaveTo="transition-leave-to">
                        <PopoverPanel anchor="bottom"
                            className="custom-divide custom-anchor-gap blue-glass">
                            {NavDropDown.Contact.map((nav) => (
                                <div key={nav.id} className="p-1">
                                    <LinkScroll className="popover-link" to={nav.link}>
                                        <p className="font-semibold">{nav.title}</p>
                                        <p className="text-yellow-200">{nav.subTitle}</p>
                                    </LinkScroll>
                                </div>
                            ))
                            }
                        </PopoverPanel>
                    </Transition>
                </Popover>

                {/* Shop */}
                <Popover>
                    <PopoverButton className="nav-popover">
                        <LinkRouter to="/shop">Shop</LinkRouter>
                        <ChevronDown size={12} />
                    </PopoverButton>
                    <Transition enter="transition-enter" enterFrom="transition-enter-from" enterTo="transition-enter-to"
                        leave="transition-leave" leaveFrom="transition-leave-from" leaveTo="transition-leave-to">
                        <PopoverPanel anchor="bottom"
                            className="custom-divide custom-anchor-gap blue-glass">
                            {NavDropDown.Shop.map((nav) => (
                                <div key={nav.id} className="p-1">
                                    <LinkScroll className="popover-link" to={nav.link}>
                                        <p className="font-semibold">{nav.title}</p>
                                        <p className="text-yellow-200">{nav.subTitle}</p>
                                    </LinkScroll>
                                </div>
                            ))
                            }
                        </PopoverPanel>
                    </Transition>
                </Popover>
            </div>
        </div>
    )
}

export default NavLinks;
