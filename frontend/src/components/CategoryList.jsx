import { useEffect, useState } from "react";
import api from "../api";

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function load() {
            try {
                const res = await api.get("/categories");
                setCategories(res.data);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        }
        load();
    }, []);

    return (
        <div style={{ marginTop: "1rem" }}>
            <h4>Category List</h4>
            <ul
                style={{
                    listStyle: "none",
                    padding: 0,
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    background: "#fafafa",
                }}
            >
                {categories.map((cat) => (
                    <li
                        key={cat.id}
                        style={{
                            padding: "8px 10px",
                            borderBottom: "1px solid #eee",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span>{cat.name}</span>
                        <span
                            style={{
                                background: "#e8f5e9",
                                color: "#2e7d32",
                                fontSize: "12px",
                                padding: "2px 6px",
                                borderRadius: "4px",
                            }}
                        >
                            ID: {cat.id}
                        </span>
                    </li>
                ))}
                {categories.length === 0 && (
                    <li style={{ padding: "8px", textAlign: "center", color: "#777" }}>
                        No categories yet.
                    </li>
                )}
            </ul>
        </div>
    );
}
