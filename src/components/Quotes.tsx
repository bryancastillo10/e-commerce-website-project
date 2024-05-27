import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";
import { QuoteCards } from "./child";
import { useQuotesContext } from "src/context/UseContexts";


const Quotes = () => {

    const { contentAuthor, tagLine, handleFetch, allowFetch } = useQuotesContext();

    return (
        <section id="quotes">
            <div className="section-container query-container">
                <div>
                    <div className="about-title">
                        <p className="section-subtitle">Quotes Generator</p>
                        <h1 className="section-header">Motivational Quotes </h1>
                    </div>
                </div>
            </div>
            <div className="quote-section-layout">
                <motion.button
                    onClick={handleFetch}
                    whileTap={buttonAnimation.whileTap}
                    whileHover={buttonAnimation.whileHover}
                    transition={buttonAnimation.transition}
                    className="btn-design">
                    Generate Quotes
                </motion.button>
                <motion.div className="quote-card-container form-glass"
                    variants={{ initial: { scale: 0 }, zoom: { scale: 1 }, exit: { scale: 0.90 } }}
                    initial="initial"
                    exit="exit"
                    animate={allowFetch ? 'initial' : 'zoom'}
                >
                    <QuoteCards generatedQuotes={contentAuthor} tags={tagLine} />
                </motion.div>
            </div>
        </section>
    )
}

export default Quotes;
