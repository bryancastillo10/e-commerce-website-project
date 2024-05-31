import { ReactNode } from "react";
import { Transition } from "@headlessui/react";

interface DropdownTransitionProps {
    children: ReactNode;
}

const DropdownTransition = ({ children }: DropdownTransitionProps) => {
    return (
        <>
            <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >{children}
            </Transition></>
    )
}

export default DropdownTransition;
