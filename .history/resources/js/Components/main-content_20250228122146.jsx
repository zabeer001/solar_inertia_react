import React, { useState } from "react";
import { router } from "@inertiajs/react";
import { HardHat, PenTool as Tool, BarChart3, PanelTop } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust path if needed
import { Link } from "@inertiajs/inertia-react";

export function MainContent({ content }) {
    const [selectedPanels, setSelectedPanels] = useState(null);
    const [customQuantity, setCustomQuantity] = useState("");

    // const { props } = usePage();

    const handleDonate = (panels) => {
        setSelectedPanels(panels);
        setCustomQuantity(panels.toString());
    };

    const handleCheckout = () => {
        if (selectedPanels) {
            router.visit(
                `/checkout?panels=${selectedPanels}&amount=${
                    selectedPanels * 550
                }`
            );
        }
    };

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-16">
                {/* Left Side - Information */}
                <div className="space-y-8">
                    {content.map(
                        ({
                            icon_image,
                            content_title,
                            content_description,
                        }) => (
                            <div key={content_title} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-[#F1F8E9] flex items-center justify-center">
                                        {/* <Icon className="w-6 h-6 text-[#4CAF50]" /> */}
                                        <img
                                            src={`/uploads/${icon_image}`}
                                            alt={icon_image}
                                            className="rounded-full h-10 w-10"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-2">
                                        {content_title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {content_description}
                                    </p>
                                </div>
                            </div>
                        )
                    )}

                    <div className="text-center py-8">
                        <p className="text-gray-800 font-medium mb-4">
                            At Solar Foundation, we're not just installing solar
                            panels...
                        </p>
                        <Button
                            variant="destructive"
                            className="bg-[#D32F2F] hover:bg-[#B71C1C]"
                        >
                            LEARN ABOUT THE NEW SPORTS COMPLEX
                        </Button>
                    </div>
                </div>

                {/* Right Side - Donation Selection */}
                <div>
                    <h2 className="text-3xl font-bold mb-8">
                        Build a Brighter Future: <br />
                        Select Your Solar Impact
                    </h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((panels) => (
                            <div key={panels} className="border rounded-md p-4">
                                <div
                                    className={`flex items-center space-x-3 p-3 rounded-md duration-500 ${
                                        selectedPanels === panels
                                            ? "bg-green-400"
                                            : ""
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        id={`donate-${panels}`}
                                        name="donate"
                                        value={panels}
                                        checked={selectedPanels === panels}
                                        onChange={() => handleDonate(panels)}
                                        className="h-4 w-4 text-[#4CAF50]"
                                    />
                                    <label
                                        htmlFor={`donate-${panels}`}
                                        className="flex-grow font-medium"
                                    >
                                        Donate {panels} Solar Panel
                                        {panels > 1 ? "s" : ""}
                                    </label>
                                    <span className="font-bold">
                                        ${panels * 550}
                                    </span>
                                </div>
                                {selectedPanels === panels && (
                                    <div className="mt-3 text-sm text-gray-600">
                                        <p>
                                            Your donation of ${panels * 550}{" "}
                                            will:
                                        </p>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>
                                                Install {panels} high-efficiency
                                                solar panel
                                                {panels > 1 ? "s" : ""}
                                            </li>
                                            <li>
                                                Generate approximately{" "}
                                                {panels * 1.5} MWh of clean
                                                energy annually
                                            </li>
                                            <li>
                                                Offset about {panels * 1.2} tons
                                                of CO2 each year
                                            </li>
                                            <li>
                                                Provide an estimated $
                                                {panels * 550 * 7.27} in value
                                                over the system's lifetime
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Custom Quantity Input */}
                        <div className="mt-8">
                            <div className="text-gray-600 mb-2">
                                Custom amount? Awesome!
                            </div>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={customQuantity}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setCustomQuantity(value);
                                        if (value !== "") {
                                            handleDonate(
                                                Number.parseInt(value)
                                            );
                                        }
                                    }}
                                    placeholder="Enter custom quantity"
                                    className={`w-full p-3 border rounded-md ${
                                        customQuantity
                                            ? "bg-lime-100 border-lime-500"
                                            : "bg-white"
                                    }`}
                                />
                            </div>
                        </div>
                        {customQuantity && (
                            <div className="mt-3 text-sm text-gray-600">
                                <p>
                                    Your donation of ${customQuantity * 550}{" "}
                                    will:
                                </p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>
                                        Install {customQuantity} high-efficiency
                                        solar panel
                                        {customQuantity > 1 ? "s" : ""}
                                    </li>
                                    <li>
                                        Generate approximately {panels * 1.5}{" "}
                                        MWh of clean energy annually
                                    </li>
                                    <li>
                                        Offset about {panels * 1.2} tons of CO2
                                        each year
                                    </li>
                                    <li>
                                        Provide an estimated $
                                        {panels * 550 * 7.27} in value over the
                                        system's lifetime
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Checkout Button */}
                    <Link
                        href="/billing"
                        className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] mt-4 inline-flex items-center justify-center px-4 py-2 text-white rounded-md"
                    >
                        GO TO CHECKOUT
                    </Link>
                </div>
            </div>
        </section>
    );
}
