import React from 'react'

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Products</h1>
            <p className="text-sm text-gray-500">Manage your product inventory</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full md:w-64 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add New Product
            </button>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full whitespace-nowrap">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Product Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Stock</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Example Product</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Electronics</td>
                  <td className="px-4 py-3 text-sm text-gray-700">100</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 text-xs text-green-700 bg-green-100 rounded-full">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products