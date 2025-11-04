import { Link } from "react-router-dom";

export default function Navbar() {
    const navStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#2e7d32",
        color: "#fff",
        padding: "10px 20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    };

    const linkStyle = {
        color: "#fff",
        textDecoration: "none",
        margin: "0 12px",
        fontWeight: "500",
    };


    return (
        <nav style={navStyle}>
            <h2 style={{ margin: 0 }}>🛒 Supermarket</h2>
            <div>
                <Link to="/" style={linkStyle}>
                    Dashboard
                </Link>
                <Link to="/products" style={linkStyle}>
                    Products
                </Link>
                <Link to="/categories" style={linkStyle}>
                    Categories
                </Link>
            </div>
        </nav>
    );
}
