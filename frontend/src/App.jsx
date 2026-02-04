import { useState } from "react";
import Catalog from "./pages/Catalog";
import Order from "./pages/Order";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            {!selectedProduct ? (
                <Catalog onSelect={setSelectedProduct} />
            ) : (
                <Order
                    product={selectedProduct}
                    onBack={() => setSelectedProduct(null)}
                />
            )}
        </>
    );
}

export default App;
