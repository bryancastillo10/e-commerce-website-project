import {
  Transition,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";
import { LucideIcon, XCircle } from "lucide-react";

interface SelectedCardProps {
  id: number;
  cardImg: string;
  title: string;
  description: string;
  icon: LucideIcon;
  openCard: boolean;
  handleCard: () => void;
}

const SelectedCard = ({
  id,
  cardImg,
  title,
  description,
  icon: Icon,
  openCard,
  handleCard,
}: SelectedCardProps) => {
  return (
    <Transition appear show={openCard}>
      <Dialog as="div" className="dialog" onClose={handleCard}>
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
                className="bg-[hsla(202,100%,35%,0.9)] rounded-xl block 
              min-h-[300px] md:max-w-full lg:max-w-[80%] xl:max-w-[60%] shadow-md"
              >
                <article
                  key={id}
                  className="flex flex-col md:flex-row justify-center"
                >
                  <div className="flex-grow-1 w-full">
                    <img
                      src={cardImg}
                      alt={cardImg}
                      className="w-full md:w-[500px] h-[300px] min-h-fit rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl"
                    />
                  </div>
                  <div className="relative flex flex-col md:max-w-[60%] justify-center items-center">
                    <DialogTitle
                      as="h1"
                      className="flex justify-center items-center gap-2 
                      font-bold text-[18px] my-4 text-secondary"
                    >
                      <Icon size={35} />
                      {title}
                      <div
                        className="hidden md:block absolute text-danger hover:text-amber-500 duration-500 ease-out top-2 right-4 cursor-pointer"
                        onClick={handleCard}
                      >
                        <XCircle />
                      </div>
                    </DialogTitle>
                    <div className="flex-grow  max-w-[80%] mx-auto">
                      <p className="text-secondary text-sm text-justify text-balance font-light tracking-light">
                        {description}
                      </p>
                      <div className="mt-4 p-6 md:p-0 md:mt-8 xl:mt-12 text-center">
                        <motion.button
                          whileTap={buttonAnimation.whileTap}
                          whileHover={buttonAnimation.whileHover}
                          transition={buttonAnimation.transition}
                          onClick={handleCard}
                          className="rounded-2xl font-bold px-4 py-2 tracking-wide w-[150px] bg-neutral-green text-secondary"
                        >
                          Got It
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </article>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SelectedCard;
