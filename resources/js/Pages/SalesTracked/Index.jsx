import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

const SalesTrackedIndex = ({ sales }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this entry?")) {
            Inertia.delete(route("sales_tracked.destroy", id));
        }
    };

    return (
        <div className="container">
            <h1 className="text-2xl font-bold mb-4">Sales Tracked</h1>
            <Link
                href={route("sales_tracked.create")}
                className="btn btn-primary mb-4"
            >
                Add New Sales
            </Link>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Panels Purchased</th>
                        <th>Country</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale) => (
                        <tr key={sale.id}>
                            <td>{sale.f_name}</td>
                            <td>{sale.l_name}</td>
                            <td>{sale.panels_purchased}</td>
                            <td>{sale.country}</td>
                            <td>{sale.phone}</td>
                            <td>{sale.email}</td>
                            <td>
                                <Link
                                    href={route("sales_tracked.edit", sale.id)}
                                    className="btn btn-primary"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(sale.id)}
                                    className="btn btn-danger ml-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesTrackedIndex;
