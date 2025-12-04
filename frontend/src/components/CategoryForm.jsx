import { useState } from "react";
import api from "../api";

export default function CategoryForm({ onAdded }) {
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        try {
            await api.post("/categories", { name });
            setName("");
            onAdded();
        } catch (err) {
            console.error("Error adding category:", err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                gap: "10px",
                marginBottom: "1rem",
                justifyContent: "center",
            }}
        >
            <input
                className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "200px" }}
                required
            />
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300" type="submit">
                Add
            </button>
        </form>
    );
}