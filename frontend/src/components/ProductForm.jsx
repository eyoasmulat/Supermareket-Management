import { useState } from "react";
import api from "../api";

export default function ProductForm({ onAdded }) {
    const [form, setForm] = useState({ name: "", price: "", categoryId: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post("/products", form);
        setForm({ name: "", price: "", categoryId: "" });
        onAdded();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="row">
                <div className="col">
                    <input
                        className="form-control"
                        placeholder="Product Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                    />
                </div>
                <div className="col">
                    <input
                        className="form-control"
                        placeholder="Price"
                        type="number"
                        value={form.price}
                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                        required
                    />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    );
}
