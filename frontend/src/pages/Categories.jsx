import { useState } from "react";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

export default function Categories() {
    const [refresh, setRefresh] = useState(false);

    return (
        <div>
            <h2>Categories</h2>
            <CategoryForm onAdded={() => setRefresh(r => !r)} />
            <CategoryList key={String(refresh)} />
        </div>
    );
}
