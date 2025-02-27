import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import BackendLayout from "@/Layouts/Backend/BackendLayout";

const SalesTrackedEdit = ({ salesEntry = null }) => {
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

    useEffect(() => {
        if (salesEntry) {
            setFormData(salesEntry);
        }
    }, [salesEntry]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (salesEntry) {
            Inertia.put(route("sales_tracked.update", salesEntry.id), formData);
        } else {
            Inertia.post(route("sales_tracked.store"), formData);
        }
    };

    return (
        <div className="container">
            <h1 className="text-2xl font-bold mb-4">
                {salesEntry ? "Edit Sales Entry" : "Create Sales Entry"}
            </h1>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <input
                        key={key}
                        type={key === "email" ? "email" : key === "panels_purchased" ? "number" : "text"}
                        name={key}
                        placeholder={key.replace("_", " ").toUpperCase()}
                        value={formData[key]}
                        onChange={(e) =>
                            setFormData({ ...formData, [key]: e.target.value })
                        }
                        className="input mb-2"
                    />
                ))}
                <button type="submit" className="btn btn-primary mt-4">
                    {salesEntry ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    );
};

SalesTrackedEdit.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default SalesTrackedEdit;
