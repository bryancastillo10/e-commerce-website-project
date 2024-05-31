import { Navbar, Footer } from "./ui";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import { ShoppingContextProvider } from "./context/ShopContext";
import { PageRoutes } from "./routes";
import "./index.css";
import "./styles/components.css";

const App = () => {


  return (
    <div>
      <Navbar />
      <ThemeContextProvider>
        <ShoppingContextProvider>
          <PageRoutes />
          <Outlet />
        </ShoppingContextProvider>
      </ThemeContextProvider>
      <Footer />
    </div>
  )
}

export default App;
