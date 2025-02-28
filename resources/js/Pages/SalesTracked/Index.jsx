import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import BackendLayout from "@/Layouts/Backend/BackendLayout";

const SalesTrackedIndex = ({ sales }) => {
    

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this entry?")) {
            Inertia.delete(route("sales_tracked.destroy", id));
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-8 bg-white my-6 rounded-lg">
            <div className="py-8">
                <div className="flex justify-between items-center mb-4">
                    {/* <h1 className="text-2xl font-bold">Sales Tracked</h1> */}
                    
                    <Link
                        href={route("sales_tracked.create")}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add New Sales
                    </Link>
                </div>
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Panels Purchased</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {sales.data.map((sale) => (
                                <tr key={sale.id} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.f_name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.l_name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.panels_purchased}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.country}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <Link href={route("sales_tracked.edit", sale.id)} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                        <button onClick={() => handleDelete(sale.id)} className="text-red-600 hover:text-red-900 ml-2">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex justify-center">
                    {sales.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url || "#"}
                            className={`mx-1 px-3 py-2 border rounded ${link.active ? "bg-blue-500 text-white" : "bg-white text-blue-500 border-blue-500 hover:bg-blue-100"}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

SalesTrackedIndex.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default SalesTrackedIndex;
