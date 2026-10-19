import { createRoot } from "react-dom/client";
import PricesPage from "./components/PricesPage.jsx";

// Keep this import list identical to src/home.jsx so Vite emits a single
// shared CSS bundle and responsive rules stay at the end of the cascade.
import "./css/reset.css";
import "./css/variables.css";
import "./css/base.css";
import "./css/header.css";
import "./css/covers.css";
import "./css/home.css";
import "./css/prices.css";
import "./css/footer.css";
import "./css/responsive.css";

createRoot(document.getElementById("root")).render(<PricesPage />);
