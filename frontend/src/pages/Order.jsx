import { useState } from "react";
import { createOrder } from "../services/api";

export default function Order({ product, onBack }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT KEKLIK");

    await createOrder({
      customer_name: name,
      product_id: product.id,
      quantity: qty,
      note: note,
    });

    alert("Pesanan terkirim");
    onBack();
  }

  return (
    <div>
      <h2>Pesan {product.name}</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          value={qty}
          min="1"
          onChange={(e) => setQty(e.target.value)}
        />

        <textarea
          placeholder="Catatan"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button type="submit">Kirim</button>
        <button type="button" onClick={onBack}>Batal</button>
      </form>
    </div>
  );
}
