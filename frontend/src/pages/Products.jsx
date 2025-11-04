import { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

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
