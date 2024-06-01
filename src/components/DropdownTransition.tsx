import { ReactNode } from "react";
import { Transition } from "@headlessui/react";

interface DropdownTransitionProps {
    children: ReactNode;
}

const DropdownTransition = ({ children }: DropdownTransitionProps) => {
    return (
        <>
            <Transition
                enter="transition ease-out duration-400"
                enterFrom="opacity-0 translate-y-[-2]"
                enterTo="opacity-100 translate-y-1"
                leave="transition ease-in duration-400"
                leaveFrom="opacity-100 translate-y-1"
                leaveTo="opacity-0 translate-y-[-2]"
            >{children}
            </Transition></>
    )
}

export default DropdownTransition;
