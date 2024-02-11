import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/login/Login";

const App = () => {
    return (
        <div className="w-screen h-screen bg-zinc-950">
            <Routes>
                <Route path="/*" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;