export default function Dashboard() {
    return (
        <div className="text-center mt-4 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Welcome to Supermarket Management</h2>
            <p className="text-xl text-gray-600 mb-6">
                Use the navigation bar to manage Products, Categories, and Sales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800">Products</h3>
                    <p className="text-blue-600">Manage your product inventory</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800">Categories</h3>
                    <p className="text-green-600">Organize products by category</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800">Sales</h3>
                    <p className="text-purple-600">Track sales transactions</p>
                </div>
            </div>
        </div>
    );
}