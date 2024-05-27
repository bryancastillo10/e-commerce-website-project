import { Dialog, DialogTitle, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { CircleX } from "lucide-react";
import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";
import { LucideIcon } from "lucide-react";
import { useThemeContext } from "src/context/UseContexts";

interface MessageSentModalProps {
    header: string;
    content: string;
    icon: LucideIcon;
    openModal: boolean;
    toggleModal: () => void;
}

const MessageSentModal = ({ header, content, icon: Icon, openModal, toggleModal }: MessageSentModalProps) => {
    const { theme } = useThemeContext();
    return (
        <Transition appear show={openModal}>
            <Dialog as="div" className="dialog" onClose={toggleModal}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 transform-[scale(95%)]"
                            enterTo="opacity-100 transform-[scale(100%)]"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 transform-[scale(100%)]"
                            leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                            <DialogPanel className={`dialog-panel ${theme ? "text-accent" : "text-secondary"}`}>
                                <DialogTitle as="h3" className="dialog-title">
                                    <Icon />
                                    {header}
                                </DialogTitle>
                                <div className="dialog-close-btn" onClick={toggleModal}><CircleX /></div>
                                <p className="dialog-paragraph">{content}</p>
                                <p className="dialog-paragraph">Disclaimer: this is just for demo purposes</p>
                                <div className="mt-4 ">
                                    <motion.button
                                        whileTap={buttonAnimation.whileTap}
                                        whileHover={buttonAnimation.whileHover}
                                        transition={buttonAnimation.transition}
                                        className="modal-btn"
                                        onClick={toggleModal}
                                    >
                                        Okay
                                    </motion.button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default MessageSentModal
