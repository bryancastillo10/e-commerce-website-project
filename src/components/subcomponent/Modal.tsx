import {
  Dialog,
  DialogTitle,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { CircleX } from "lucide-react";
import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";
import { LucideIcon } from "lucide-react";

interface ModalProps {
  header: string;
  content: string;
  icon: LucideIcon;
  openModal: boolean;
  toggleModal: () => void;
}

const Modal = ({
  header,
  content,
  icon: Icon,
  openModal,
  toggleModal,
}: ModalProps) => {
  return (
    <Transition appear show={openModal}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={toggleModal}
      >
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
              <DialogPanel
                className="w-full flex flex-col items-center max-w-md rounded-xl 
                border blue-glass p-6 text-secondary"
              >
                <DialogTitle
                  as="h3"
                  className="flex gap-2 justify-evenly items-center text-xl font-bold text-center mb-2"
                >
                  <Icon />
                  {header}
                </DialogTitle>
                <div
                  className="absolute text-danger hover:text-amber-500 duration-500 ease-out top-2 right-4 cursor-pointer"
                  onClick={toggleModal}
                >
                  <CircleX />
                </div>
                <p className="dialog-paragraph">{content}</p>
                <p className="mt-2 text-sm/6 font-light">
                  Disclaimer: this is just for demo purposes
                </p>
                <div className="mt-4 ">
                  <motion.button
                    whileTap={buttonAnimation.whileTap}
                    whileHover={buttonAnimation.whileHover}
                    transition={buttonAnimation.transition}
                    className="bg-neutral-green text-white tracking-wide px-4 py-1 rounded-2xl text-sm/5"
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
  );
};

export default Modal;
