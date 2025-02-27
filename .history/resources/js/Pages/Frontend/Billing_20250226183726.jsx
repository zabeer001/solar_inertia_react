import React from "react";
import MainLayout from "@/Layouts/Frontend/MainLayout";
import { Hero } from "@/Layouts/Frontend/Partials/Hero";
import { CheckoutForm } from "@/Components/checkout-form";

const Billing = () => {
    return (
        <div>
            <CheckoutForm/>
        </div>
    );
};

Billing.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Billing;
