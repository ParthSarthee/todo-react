import { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { Counter } from "./MyComponent.jsx";
import Greeting from "./Greeting.jsx";
import MyForm from "./MyForm.jsx";
import Looping from "./Looping.jsx";

const NameContext = createContext("");

createRoot(document.getElementById("root")).render(
	<StrictMode>
		{/* <Greeting /> */}
		{/* <Counter /> */}
		{/* <MyForm /> */}
		<Looping />
	</StrictMode>
);

export { NameContext };

// Mathmatical/Programmatical Components
// A Javascript function that returns HTML used as Tags.
// TailwindCSS Integration
// Todo App
