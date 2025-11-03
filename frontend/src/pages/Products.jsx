import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import { useState } from "react";

export default function Products() {
    const [refresh, setRefresh] = useState(false);

    return (
        <div>
            <h2>Products</h2>
            <ProductForm onAdded={() => setRefresh(r => !r)} />
            <ProductList key={String(refresh)} />
        </div>
    );
}
