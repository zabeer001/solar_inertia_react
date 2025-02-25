import React, { useState, useEffect } from "react";
import BackendLayout from "@/Layouts/Backend/BackendLayout";
import { Inertia } from "@inertiajs/inertia";

const EntryForm = ({ data }) => {
    // Initialize form with existing campaign data or empty values
    const [form, setForm] = useState({
        target: data?.target || "",
        no_solar_panels: data?.no_solar_panels || "",
        energy_saved: data?.energy_saved || "",
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };
    const costPerSolarPanel =
        form.target && form.no_solar_panels
            ? (
                  parseFloat(form.target) / parseFloat(form.no_solar_panels)
              ).toFixed(2)
            : "0.00";

    const EnergySavedPerSolarPanel =
        form.target && form.no_solar_panels
            ? (
                  parseFloat(form.target) / parseFloat(form.no_solar_panels)
              ).toFixed(2)
            : "0.00";

    // Submit the form data to store or update campaign
    const submitForm = async (e) => {
        e.preventDefault();
        await Inertia.post("campaign-details", form); // Submit the form data
    };

    return (
        <div className="max-w-lg mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">
                {data ? "Update Campaign Details" : "Add Campaign Details"}
            </h1>
            <form onSubmit={submitForm} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium">Target</label>
                    <input
                        type="number"
                        name="target"
                        value={form.target}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">
                        Number of Solar Panels
                    </label>
                    <input
                        type="number"
                        name="no_solar_panels"
                        value={form.no_solar_panels}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">
                        Cost Per Solar Panel
                    </label>
                    <input
                        type="text"
                        value={`$${costPerSolarPanel}`}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md bg-gray-100"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">
                        Energy Saved
                    </label>
                    <input
                        type="number"
                        name="energy_saved"
                        value={form.energy_saved}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
                >
                    {data ? "Update Campaign" : "Save Campaign"}
                </button>
            </form>
        </div>
    );
};

EntryForm.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default EntryForm;
