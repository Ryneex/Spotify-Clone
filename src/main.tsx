import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice.js";
import { Provider } from "react-redux";

const store = configureStore({
    reducer: userSlice,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASE_URI}>
            <App />
        </BrowserRouter>
    </Provider>
);
