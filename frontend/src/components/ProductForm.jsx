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
            <div className="flex flex-wrap gap-2">
                <div className="flex-grow min-w-[120px]">
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Product Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                    />
                </div>
                <div className="flex-grow min-w-[120px]">
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Price"
                        type="number"
                        value={form.price}
                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                        required
                    />
                </div>
                <div className="flex-auto">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300">Add</button>
                </div>
            </div>
        </form>
    );
}