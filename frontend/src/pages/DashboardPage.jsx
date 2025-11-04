import { useEffect, useState } from "react";
import api from "../api";

export default function DashboardPage() {
    const [summary, setSummary] = useState({
        products: 0,
        categories: 0,
        totalValue: 0,
    });

    useEffect(() => {
        async function loadSummary() {
            try {
                const [productsRes, categoriesRes] = await Promise.all([
                    api.get("/products"),
                    api.get("/categories"),
                ]);

                const totalValue = productsRes.data.reduce(
                    (sum, p) => sum + parseFloat(p.price || 0),
                    0
                );

                setSummary({
                    products: productsRes.data.length,
                    categories: categoriesRes.data.length,
                    totalValue,
                });
            } catch (err) {
                console.error("Error loading dashboard:", err);
            }
        }
        loadSummary();
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h2>Supermarket Dashboard</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1.5rem",
                    marginTop: "1rem",
                }}
            >
                <div
                    style={{
                        background: "#f5f5f5",
                        padding: "1.5rem",
                        borderRadius: "8px",
                        width: "180px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                >
                    <h4>Products</h4>
                    <p style={{ fontSize: "20px", color: "#2e7d32" }}>{summary.products}</p>
                </div>

                <div
                    style={{
                        background: "#f5f5f5",
                        padding: "1.5rem",
                        borderRadius: "8px",
                        width: "180px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                >
                    <h4>Categories</h4>
                    <p style={{ fontSize: "20px", color: "#1976d2" }}>{summary.categories}</p>
                </div>

                <div
                    style={{
                        background: "#f5f5f5",
                        padding: "1.5rem",
                        borderRadius: "8px",
                        width: "200px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                >
                    <h4>Total Value</h4>
                    <p style={{ fontSize: "20px", color: "#d32f2f" }}>
                        ${summary.totalValue.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
}
