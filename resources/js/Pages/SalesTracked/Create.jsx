import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import BackendLayout from "@/Layouts/Backend/BackendLayout";

const SalesTrackedCreate = () => {
    const [formData, setFormData] = useState({
        f_name: "",
        l_name: "",
        panels_purchased: "",
        country: "",
        street: "",
        town: "",
        state: "",
        zip_code: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("sales_tracked.store"), formData);
    };

    return (
        
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Sales Entry</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">First Name</label>
                        <input type="text" name="f_name" value={formData.f_name} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="First Name" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Last Name</label>
                        <input type="text" name="l_name" value={formData.l_name} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Last Name" />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700">Panels Purchased</label>
                    <input type="number" name="panels_purchased" value={formData.panels_purchased} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Panels Purchased" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Country</label>
                        <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Country" />
                    </div>
                    <div>
                        <label className="block text-gray-700">State</label>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="State" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Street</label>
                        <input type="text" name="street" value={formData.street} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Street" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Town</label>
                        <input type="text" name="town" value={formData.town} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Town" />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700">Zip Code</label>
                    <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Zip Code" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Phone</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Phone" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Email" />
                    </div>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">Submit</button>
            </form>
        </div>
    );
};

SalesTrackedCreate.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default SalesTrackedCreate;
