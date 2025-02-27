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

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("sales_tracked.store"), formData);
    };

    return (
        <div className="container">
            <h1 className="text-2xl font-bold mb-4">Create Sales Entry</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="f_name"
                    placeholder="First Name"
                    value={formData.f_name}
                    onChange={(e) =>
                        setFormData({ ...formData, f_name: e.target.value })
                    }
                    className="input mb-2"
                />
                <input
                    type="text"
                    name="l_name"
                    placeholder="Last Name"
                    value={formData.l_name}
                    onChange={(e) =>
                        setFormData({ ...formData, l_name: e.target.value })
                    }
                    className="input mb-2"
                />
                <input
                    type="number"
                    name="panels_purchased"
                    placeholder="Panels Purchased"
                    value={formData.panels_purchased}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            panels_purchased: e.target.value,
                        })
                    }
                    className="input mb-2"
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                    }
                    className="input mb-2"
                />
                <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={formData.street}
                    onChange={(e) =>
                        setFormData({ ...formData, street: e.target.value })
                    }
                    className="input mb-2"
                />
                <input
                    type="text"
                    name="town"
                    placeholder="Town"
                    value={formData.town}
                    onChange={(e) =>
                        setFormData({ ...formData, town: e.target.value })
                    }
                    className="input mb-2"
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                    }
                    className="input mb-2"
                />
                <input
                    type="text"
                    name="zip_code"
                    placeholder="Zip Code"
                    value={formData.zip_code}
                    onChange={(e) =>
                        setFormData({ ...formData, zip_code: e.target.value })
                    }
                    className="input mb-2"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                    }
                    className="input mb-2"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    className="input mb-2"
                />
                <button type="submit" className="btn btn-primary mt-4">
                    Submit
                </button>
            </form>
        </div>
    );
};

SalesTrackedCreate.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default SalesTrackedCreate;
