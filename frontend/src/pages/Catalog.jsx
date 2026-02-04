import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function Catalog({ onSelect }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return (
        <div>
            <h1>Katalog Produk</h1>

            {products.map(p => (
                <div
                    key={p.id}
                    style={{ border: "1px solid #ccc", margin: 10 }}
                >
                    <h3>{p.name}</h3>
                    <p>Rp {p.price.toLocaleString("id-ID")}</p>
                    <button onClick={() => onSelect(p)}>Pesan</button>
                </div>
            ))}
        </div>
    );
}
