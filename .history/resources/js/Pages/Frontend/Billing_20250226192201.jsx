import React from "react";
import MainLayout from "@/Layouts/Frontend/MainLayout";
import { Hero } from "@/Layouts/Frontend/Partials/Hero";
import { CheckoutForm } from "@/Components/checkout-form";
import { Button } from "@headlessui/react";

const Billing = () => {
    return (
        <div className="container mx-auto">
            <div className="flex items-center gap-8 justify-betwe">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Checkout</h1>
                    <p className="text-gray-600 mb-8">
                        Please fill in your details below. If you'd like your
                        donation to be made public, you can add a message in the
                        'Additional Information' section.
                    </p>
                </div>
                <Button className="bg-lime-600 text-white text-2xl rounded-lg font-black py-4 px-6">
                    Understanding your <br /> Tax-deductible donation
                </Button>
            </div>
            <CheckoutForm />
        </div>
    );
};

Billing.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Billing;
