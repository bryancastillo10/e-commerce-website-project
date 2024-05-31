import { MenuItem } from "@headlessui/react";
import { Link as LinkScroll } from "react-scroll";

interface DropdownProps {
    title: string;
    subTitle: string;
    link: string;
}

const Dropdown = ({ title, subTitle, link }: DropdownProps) => {
    return (
        <MenuItem as="div" className="flex flex-col p-2 rounded-xl hover:bg-emerald-200/30">
            <p className="text-base font-medium text-primary">
                <LinkScroll to={link}>
                    {title}
                </LinkScroll>
            </p>
            <p className="text-sm text-neutral-green tracking-wide">{subTitle}</p>
        </MenuItem>
    )
}

export default Dropdown;
