import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Order from "./pages/Order";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <Routes>
                {/* USER AREA */}
                <Route path="/" element={<LandingPage />} />

                {/* ADMIN AREA */}
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                    path="/katalog"
                    element={<Catalog onSelect={setSelectedProduct} />}
                />
                <Route
                    path=""
                    element={
                        <Order
                            product={selectedProduct}
                            onBack={() => setSelectedProduct(null)}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
