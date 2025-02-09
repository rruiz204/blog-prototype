import "./index.css";
import { Router } from "@routes/router";
import { createRoot } from "react-dom/client"

const component = (<Router></Router>);
const root = document.getElementById("root")!;

createRoot(root).render(component);