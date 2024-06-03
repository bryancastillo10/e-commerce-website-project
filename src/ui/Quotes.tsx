import { motion } from "framer-motion";
import { QuoteCards, Button } from "../components";
import { MousePointerClick } from "lucide-react";
import { useQuotesContext } from "src/context/UseContexts";

const Quotes = () => {
  const { contentAuthor, tagLine, handleFetch, allowFetch } =
    useQuotesContext();

  return (
    <section id="quotes" className="">
      <div className="section-container query-container">
        <div>
          <div className="about-title">
            <p className="section-subtitle">Quotes Generator</p>
            <h1 className="section-header">Motivational Quotes </h1>
            <p className="mt-2">Click on the button to generate some quotes</p>
          </div>
        </div>
      </div>
      <div className="quote-section-layout">
        <Button link={handleFetch} type="quotes">
          <MousePointerClick />
        </Button>
        <motion.div
          className="quote-card-container blue-glass"
          variants={{
            initial: { scale: 0 },
            zoom: { scale: 1 },
            exit: { scale: 0.9 },
          }}
          initial="initial"
          exit="exit"
          animate={allowFetch ? "initial" : "zoom"}
        >
          <QuoteCards generatedQuotes={contentAuthor} tags={tagLine} />
        </motion.div>
      </div>
    </section>
  );
};

export default Quotes;
