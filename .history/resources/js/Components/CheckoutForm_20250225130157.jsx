"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function CheckoutForm() {
  const searchParams = useSearchParams();
  const panels = searchParams.get("panels") || "4";
  const amount = Number(searchParams.get("amount")?.replace(",", "") || 2200);
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const lifetimeValue = (amount * 7.27).toLocaleString();

  return (
    <form className="grid md:grid-cols-2 gap-12">
      {/* Left Column - Billing Details */}
      <div>
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Billing details</h2>
          <div className="grid grid-cols-2 gap-4">
            {["firstName", "lastName"].map((field) => (
              <div key={field} className="space-y-2">
                <Label htmlFor={field} className="text-sm">
                  {field === "firstName" ? "First name *" : "Last name *"}
                </Label>
                <Input id={field} required autoComplete={field} />
              </div>
            ))}
          </div>

          {[
            { id: "company", label: "Company name (optional)", required: false },
            { id: "address", label: "Street address *", required: true, placeholder: "House number and street name" },
            { id: "city", label: "Town / City *", required: true },
            { id: "zip", label: "ZIP Code *", required: true },
            { id: "phone", label: "Phone *", required: true, type: "tel" },
            { id: "email", label: "Email address *", required: true, type: "email" },
          ].map(({ id, label, required, placeholder, type }) => (
            <div key={id} className="space-y-2">
              <Label htmlFor={id} className="text-sm">
                {label}
              </Label>
              <Input id={id} required={required} placeholder={placeholder} type={type} autoComplete={id} />
            </div>
          ))}

          <div className="space-y-2">
            <Label htmlFor="state" className="text-sm">State *</Label>
            <select id="state" className="w-full h-10 px-3 rounded-md border bg-background text-sm">
              <option value="GA">Georgia</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm">Order notes (optional)</Label>
            <textarea
              id="notes"
              rows={4}
              className="w-full p-3 rounded-md border bg-background text-sm resize-none"
              placeholder="Notes about your order, e.g. special notes for delivery"
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
              <span>Solar Panels x {panels}</span>
              <span>${amount.toLocaleString()}</span>
            </div>
            <div className="text-sm text-gray-600">Lifetime Value of ${lifetimeValue}</div>
            <div className="flex justify-between py-2 border-t font-bold">
              <span>TOTAL</span>
              <span>${amount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="bg-gray-50 rounded-lg p-6">
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
            {[
              { id: "bank", label: "Direct bank transfer" },
              { id: "credit", label: "Credit Card (Stripe)" },
            ].map(({ id, label }) => (
              <div key={id} className="flex items-center space-x-2">
                <RadioGroupItem value={id} id={id} />
                <Label htmlFor={id}>{label}</Label>
              </div>
            ))}
          </RadioGroup>

          {/* Credit Card Details */}
          {paymentMethod === "credit" && (
            <div className="mt-4 s
