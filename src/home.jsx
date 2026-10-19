import { createRoot } from "react-dom/client";
import HomePage from "./components/HomePage.jsx";

// Both HTML entries deliberately import the same stylesheet order.
// This keeps the shared CSS bundle in one deterministic cascade, with
// responsive overrides always arriving last (Vite splits shared CSS by entry).
import "./css/reset.css";
import "./css/variables.css";
import "./css/base.css";
import "./css/header.css";
import "./css/covers.css";
import "./css/home.css";
import "./css/prices.css";
import "./css/footer.css";
import "./css/responsive.css";

createRoot(document.getElementById("root")).render(<HomePage />);
