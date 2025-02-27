import React from "react";
import MainLayout from "@/Layouts/Frontend/MainLayout";
import { Hero } from "@/Layouts/Frontend/Partials/Hero";
import { CheckoutForm } from "@/Components/checkout-form";

const Billing = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold mb-2">Checkout</h1>
                <p className="text-gray-600 mb-8">
                    Please fill in your details below. If you'd like your
                    donation to be made public, you can add a message in the
                    'Additional Information' section.
                </p>
            </div>
            <CheckoutForm />
        </div>
    );
};

Billing.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Billing;
