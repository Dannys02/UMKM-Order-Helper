const API_URL = "http://localhost:8000/api";

export async function getProducts() {
    const res = await fetch(`${API_URL}/products`);
    return res.json();
}

export async function createOrder(data) {
    const res = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
