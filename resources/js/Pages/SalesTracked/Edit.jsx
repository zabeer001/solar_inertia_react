import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import BackendLayout from "@/Layouts/Backend/BackendLayout";

const Edit = ({ salesTracked }) => {
    const [formData, setFormData] = useState({
        f_name: salesTracked.f_name || "",
        l_name: salesTracked.l_name || "",
        panels_purchased: salesTracked.panels_purchased || "",
        country: salesTracked.country || "",
        street: salesTracked.street || "",
        town: salesTracked.town || "",
        state: salesTracked.state || "",
        zip_code: salesTracked.zip_code || "",
        phone: salesTracked.phone || "",
        email: salesTracked.email || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(route("sales_tracked.update", salesTracked.id), formData);
    };

    return (
        <div className="container">
            <h1 className="text-2xl font-bold mb-4">Edit Sales Entry</h1>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <input
                        key={key}
                        type={key === "email" ? "email" : key === "panels_purchased" ? "number" : "text"}
                        name={key}
                        placeholder={key.replace("_", " ").toUpperCase()}
                        value={formData[key]}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        className="input mb-2"
                    />
                ))}
                <button type="submit" className="btn btn-primary mt-4">Update</button>
            </form>
        </div>
    );
};

Edit.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default Edit;