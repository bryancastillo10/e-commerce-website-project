import { Shop, Sales } from "src/components";
import { motion } from "framer-motion";
import "src/styles/shopPageComponents.modules.css";

const ShopPage = () => {
    return (
        <motion.div>
            <Shop />
            <Sales />
        </motion.div>
    )
}

export default ShopPage;
