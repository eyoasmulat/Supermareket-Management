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
                className="form-control"
                placeholder="Enter category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "200px" }}
                required
            />
            <button className="btn btn-success" type="submit">
                Add
            </button>
        </form>
    );
}
