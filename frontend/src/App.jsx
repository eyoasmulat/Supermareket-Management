import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Sales from "./pages/Sales";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/sales" element={<Sales />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;