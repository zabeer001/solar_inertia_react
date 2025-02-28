// import { useState } from "react";
// import { usePage, Link } from "@inertiajs/react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";

// export function CheckoutForm() {
//     const { props } = usePage();
//     const panels = props.panels || "4";
//     const amount = Number(props.amount?.replace(",", "") || 2200);
//     const [paymentMethod, setPaymentMethod] = useState("credit");

//     const lifetimeValue = (amount * 7.27).toLocaleString();

//     return (
//         <form className="grid md:grid-cols-2 gap-12 container mx-auto">
//             {/* Left Column - Billing Details */}
//             <div>
//                 <div className="space-y-6">
//                     <h2 className="text-xl font-bold">Billing details</h2>
//                     <div className="grid grid-cols-2 gap-4">
//                         {["firstName", "lastName"].map((field) => (
//                             <div key={field} className="space-y-2">
//                                 <Label htmlFor={field} className="text-sm">
//                                     {field === "firstName"
//                                         ? "First name *"
//                                         : "Last name *"}
//                                 </Label>
//                                 <Input
//                                     id={field}
//                                     required
//                                     autoComplete={field}
//                                 />
//                             </div>
//                         ))}
//                     </div>

//                     {[
//                         {
//                             id: "company",
//                             label: "Company name (optional)",
//                             required: false,
//                         },
//                         {
//                             id: "address",
//                             label: "Street address *",
//                             required: true,
//                             placeholder: "House number and street name",
//                         },
//                         { id: "city", label: "Town / City *", required: true },
//                         { id: "zip", label: "ZIP Code *", required: true },
//                         {
//                             id: "phone",
//                             label: "Phone *",
//                             required: true,
//                             type: "tel",
//                         },
//                         {
//                             id: "email",
//                             label: "Email address *",
//                             required: true,
//                             type: "email",
//                         },
//                     ].map(({ id, label, required, placeholder, type }) => (
//                         <div key={id} className="space-y-2">
//                             <Label htmlFor={id} className="text-sm">
//                                 {label}
//                             </Label>
//                             <Input
//                                 id={id}
//                                 required={required}
//                                 placeholder={placeholder}
//                                 type={type}
//                                 autoComplete={id}
//                             />
//                         </div>
//                     ))}

//                     <div className="space-y-2">
//                         <Label htmlFor="state" className="text-sm">
//                             State *
//                         </Label>
//                         <select
//                             id="state"
//                             className="w-full h-10 px-3 rounded-md border bg-background text-sm"
//                         >
//                             <option value="GA">Georgia</option>
//                         </select>
//                     </div>

//                     <div className="space-y-2">
//                         <Label htmlFor="notes" className="text-sm">
//                             Order notes (optional)
//                         </Label>
//                         <textarea
//                             id="notes"
//                             rows={4}
//                             className="w-full p-3 rounded-md border bg-background text-sm resize-none"
//                             placeholder="Notes about your order, e.g. special notes for delivery"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Right Column - Order Summary & Payment */}
//             <div className="space-y-6">
//                 <div className="bg-white border rounded-lg p-6">
//                     <h2 className="text-xl font-bold mb-4">Your order</h2>
//                     <div className="space-y-4">
//                         <div className="flex justify-between py-2 border-b">
//                             <span>Solar Panels x {panels}</span>
//                             <span>${amount.toLocaleString()}</span>
//                         </div>
//                         <div className="text-sm text-gray-600">
//                             Lifetime Value of ${lifetimeValue}
//                         </div>
//                         <div className="flex justify-between py-2 border-t font-bold">
//                             <span>TOTAL</span>
//                             <span>${amount.toLocaleString()}</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Payment Options */}
//                 <div className="bg-gray-50 rounded-lg p-6">
//                     <RadioGroup
//                         value={paymentMethod}
//                         onValueChange={setPaymentMethod}
//                         className="space-y-4"
//                     >
//                         {[
//                             { id: "bank", label: "Direct bank transfer" },
//                             { id: "credit", label: "Credit Card (Stripe)" },
//                         ].map(({ id, label }) => (
//                             <div
//                                 key={id}
//                                 className="flex items-center space-x-2"
//                             >
//                                 <RadioGroupItem value={id} id={id} />
//                                 <Label htmlFor={id}>{label}</Label>
//                             </div>
//                         ))}
//                     </RadioGroup>

//                     {/* Credit Card Details */}
//                     {paymentMethod === "credit" && (
//                         <div className="mt-4 space-y-4">
//                             <p className="text-sm text-gray-600">
//                                 Pay with your credit card via Stripe.
//                             </p>
//                             {[
//                                 {
//                                     id: "card",
//                                     label: "Card Number *",
//                                     placeholder: "1234 1234 1234 1234",
//                                 },
//                                 {
//                                     id: "expiry",
//                                     label: "Expiry Date *",
//                                     placeholder: "MM/YY",
//                                 },
//                                 {
//                                     id: "cvc",
//                                     label: "Card Code (CVC) *",
//                                     placeholder: "CVC",
//                                 },
//                             ].map(({ id, label, placeholder }) => (
//                                 <div key={id} className="space-y-2">
//                                     <Label htmlFor={id} className="text-sm">
//                                         {label}
//                                     </Label>
//                                     <Input
//                                         id={id}
//                                         placeholder={placeholder}
//                                         className="bg-white"
//                                         required
//                                     />
//                                 </div>
//                             ))}

//                             <div className="flex items-center space-x-2">
//                                 <Checkbox id="save-card" />
//                                 <Label htmlFor="save-card" className="text-sm">
//                                     Save payment information to my account for
//                                     future purchases.
//                                 </Label>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Privacy Notice */}
//                 <p className="text-sm text-gray-600">
//                     Your personal data will be used to process your order,
//                     support your experience throughout this website, and for
//                     other purposes described in our{" "}
//                     <Link
//                         href="/privacy"
//                         className="text-[#4CAF50] hover:underline"
//                     >
//                         privacy policy
//                     </Link>
//                     .
//                 </p>

//                 {/* Submit Button */}
//                 <Button
//                     type="submit"
//                     className="w-full bg-[#424242] hover:bg-[#2f2f2f] text-white"
//                 >
//                     PLACE ORDER
//                 </Button>
//             </div>
//         </form>
//     );
// }

import { useState } from "react";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export function CheckoutForm() {
    const { props } = usePage();
    // const panels = props.panels || "4";

    console.log(props.selectedPanels);
    let selectedPanels = Number(props.selectedPanels);
    let target_solar_panel = props.campaignDetails.target;
    let no_solar_panels = props.campaignDetails.no_solar_panels;
    let one_solar_panel_price = target_solar_panel / no_solar_panels;
    // const amount = Number(props.amount?.replace(",", "") || 2200);
    const amount = one_solar_panel_price * selectedPanels;
    const lifetimeValue = (amount * 7.27).toLocaleString();
    let lifeTimeSavingsByDonation =
        (props.campaignDetails.energy_saved / no_solar_panels) * selectedPanels;
    console.log(lifeTimeSavingsByDonation);

    // State to store form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        country: "",
        address: "",
        city: "",
        zip: "",
        phone: "",
        email: "",
        state: "GA",
        notes: "",
        paymentMethod: "credit",
        panels_purchased: selectedPanels,
    });

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // Handle payment submission
    const handlePayment = (e) => {
        e.preventDefault();
        console.log("Final Form Data:", formData);

        Inertia.post(route("stripe.payment"), {
            amount: amount,
            ...formData,
        });
    };

    return (
        <form
            onSubmit={handlePayment}
            className="grid md:grid-cols-2 gap-12 container mx-auto"
        >
            {/* Left Column - Billing Details */}
            <div>
                <div className="space-y-6">
                    <h2 className="text-xl font-bold">Billing details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {["firstName", "lastName"].map((field) => (
                            <div key={field} className="space-y-2">
                                <Label htmlFor={field} className="text-sm">
                                    {field === "firstName"
                                        ? "First name *"
                                        : "Last name *"}
                                </Label>
                                <Input
                                    id={field}
                                    required
                                    autoComplete={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </div>

                    {[
                        { id: "company", label: "Company name (optional)" },
                        {
                            id: "country",
                            label: "Country/Region*",
                            required: true,
                        },
                        {
                            id: "address",
                            label: "Street address *",
                            required: true,
                        },
                        { id: "city", label: "Town / City *", required: true },
                        { id: "zip", label: "ZIP Code *", required: true },
                        {
                            id: "phone",
                            label: "Phone *",
                            required: true,
                            type: "tel",
                        },
                        {
                            id: "email",
                            label: "Email address *",
                            required: true,
                            type: "email",
                        },
                    ].map(({ id, label, required, type }) => (
                        <div key={id} className="space-y-2">
                            <Label htmlFor={id} className="text-sm">
                                {label}
                            </Label>
                            <Input
                                id={id}
                                required={required}
                                type={type}
                                autoComplete={id}
                                value={formData[id]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    <div className="space-y-2">
                        <Label htmlFor="state" className="text-sm">
                            State *
                        </Label>
                        <select
                            id="state"
                            className="w-full h-10 px-3 rounded-md border bg-background text-sm"
                            value={formData.state}
                            onChange={handleChange}
                        >
                            <option value="GA">Georgia</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="notes" className="text-sm">
                            Order notes (optional)
                        </Label>
                        <textarea
                            id="notes"
                            rows={4}
                            className="w-full p-3 rounded-md border bg-background text-sm resize-none"
                            placeholder="Notes about your order, e.g. special notes for delivery"
                            value={formData.notes}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Right Column - Order Summary & Payment */}
            <div className="space-y-6">
                <div className="bg-white border rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Your order</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between py-2 border-b">
                            <span>Solar Panels x {selectedPanels}</span>
                            <span>
                                ${one_solar_panel_price * selectedPanels}
                            </span>
                        </div>
                        <div className="text-sm text-gray-600">
                            Lifetime Value of ${lifeTimeSavingsByDonation}
                        </div>
                        <div className="flex justify-between py-2 border-t font-bold">
                            <span>TOTAL</span>
                            <span>
                                ${one_solar_panel_price * selectedPanels}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Payment Options */}
                <div className="bg-gray-50 rounded-lg p-6">
                    <RadioGroup
                        value={formData.paymentMethod}
                        onValueChange={(value) =>
                            setFormData((prev) => ({
                                ...prev,
                                paymentMethod: value,
                            }))
                        }
                        className="space-y-4"
                    >
                        {[
                            { id: "bank", label: "Direct bank transfer" },
                            { id: "credit", label: "Credit Card (Stripe)" },
                        ].map(({ id, label }) => (
                            <div
                                key={id}
                                className="flex items-center space-x-2"
                            >
                                <RadioGroupItem value={id} id={id} />
                                <Label htmlFor={id}>{label}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full bg-[#424242] hover:bg-[#2f2f2f] text-white"
                >
                    PLACE ORDER
                </Button>
            </div>
        </form>
    );
}
