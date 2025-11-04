import { useState, useEffect } from "react";
import api from "../api";

export default function Sales() {
    const [sales, setSales] = useState([]);
    const [form, setForm] = useState({ productId: "", quantity: 1 });

    useEffect(() => {
        loadSales();
    }, []);

    async function loadSales() {
        try {
            const res = await api.get("/sales");
            setSales(res.data);
        } catch (err) {
            console.error("Error fetching sales:", err);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await api.post("/sales", form);
            setForm({ productId: "", quantity: 1 });
            loadSales();
        } catch (err) {
            console.error("Error adding sale:", err);
        }
    }

    return (
        <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
            <h2 style={{ textAlign: "center" }}>Sales</h2>

            {/* Sale Form */}
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    marginBottom: "1rem",
                }}
            >
                <input
                    className="form-control"
                    type="text"
                    placeholder="Product ID"
                    value={form.productId}
                    onChange={(e) => setForm({ ...form, productId: e.target.value })}
                    required
                    style={{ width: "150px" }}
                />
                <input
                    className="form-control"
                    type="number"
                    min="1"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    required
                    style={{ width: "100px" }}
                />
                <button className="btn btn-primary" type="submit">
                    Record
                </button>
            </form>

            {/* Sales List */}
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    background: "#fafafa",
                }}
            >
                <thead>
                    <tr style={{ background: "#2e7d32", color: "#fff" }}>
                        <th style={{ padding: "10px" }}>Sale ID</th>
                        <th style={{ padding: "10px" }}>Product ID</th>
                        <th style={{ padding: "10px" }}>Quantity</th>
                        <th style={{ padding: "10px" }}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale) => (
                        <tr key={sale.id}>
                            <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                                {sale.id}
                            </td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                                {sale.productId}
                            </td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                                {sale.quantity}
                            </td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                                {new Date(sale.date).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                    {sales.length === 0 && (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center", padding: "10px" }}>
                                No sales recorded yet.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
