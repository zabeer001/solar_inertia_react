"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    HardHat,
    PenToolIcon as Tool,
    BarChart3,
    PanelTop,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainContent() {
    const router = useRouter();
    const [selectedPanels, setSelectedPanels] =
        (useState < number) | (null > null);
    const [customQuantity, setCustomQuantity] = useState("");

    const handleDonate = (panels: number) => {
        setSelectedPanels(panels);
        setCustomQuantity(panels.toString());
    };

    const handleCheckout = () => {
        if (selectedPanels) {
            router.push(
                `/checkout?panels=${selectedPanels}&amount=${
                    selectedPanels * 550
                }`
            );
        }
    };

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-[#F1F8E9] flex items-center justify-center">
                                <HardHat className="w-6 h-6 text-[#4CAF50]" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">
                                Community Powered:
                            </h3>
                            <p className="text-gray-600">
                                What better way to fuel our growth and create
                                lasting change than by working together with our
                                alumni, families, and friends? Your generosity
                                can turn this opportunity into reality—saving
                                our school money and making a positive impact on
                                the environment for generations to come. Every
                                contribution, no matter the size, brings us one
                                step closer to building a brighter, more
                                sustainable future.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-[#F1F8E9] flex items-center justify-center">
                                <Tool className="w-6 h-6 text-[#4CAF50]" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">
                                160 kW Solar Power System:
                            </h3>
                            <p className="text-gray-600">
                                Our cutting-edge solar installation, featuring
                                280 high-efficiency solar panels, is designed to
                                harness the sun's power effectively, generating
                                over 206 MWh of clean energy annually. Included
                                in the system's design and planning phase, the
                                School District has been able to maximize the
                                number of financial solar incentives available
                                for the project.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-[#F1F8E9] flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-[#4CAF50]" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Solar Savings:</h3>
                            <p className="text-gray-600">
                                Adding solar to the facility will save the
                                school district approximately $120,000 annually
                                in utility costs by covering 70% of their power
                                needs from the solar array. This will allow the
                                school to invest in other improvements and new
                                team members.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-[#F1F8E9] flex items-center justify-center">
                                <PanelTop className="w-6 h-6 text-[#4CAF50]" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">
                                Environmental Impact:
                            </h3>
                            <p className="text-gray-600">
                                With this solar installation, we're offsetting
                                190 tons of CO2 annually—equivalent to removing
                                41 cars from the road and powering 90 homes each
                                year. This impact is also comparable to planting
                                3,159 trees annually.
                            </p>
                        </div>
                    </div>

                    <div className="text-center py-8">
                        <p className="text-gray-800 font-medium mb-4">
                            At Solar Foundation, we're not just installing solar
                            panels; we're building a future where clean energy
                            is accessible, affordable, and sustainable for
                            everyone.
                        </p>
                        <Button
                            variant="destructive"
                            className="bg-[#D32F2F] hover:bg-[#B71C1C]"
                        >
                            LEARN ABOUT THE NEW SPORTS COMPLEX
                        </Button>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-8">
                        Build a Brighter Future:
                        <br />
                        Select Your Solar Impact
                    </h2>
                    <div className="space-y-4">
                        {[
                            { panels: 1, amount: 550 },
                            { panels: 2, amount: 1100 },
                            { panels: 3, amount: 1650 },
                            { panels: 4, amount: 2200 },
                            { panels: 5, amount: 2750 },
                        ].map(({ panels, amount }) => (
                            <div
                                key={panels}
                                className={`border rounded-md p-4 ${
                                    selectedPanels === panels
                                        ? "bg-lime-100"
                                        : ""
                                }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="radio"
                                        id={`donate-${panels}`}
                                        name="donate"
                                        value={panels}
                                        checked={selectedPanels === panels}
                                        onChange={() => handleDonate(panels)}
                                        className="h-4 w-4 text-[#4CAF50] focus:ring-[#4CAF50]"
                                    />
                                    <label
                                        htmlFor={`donate-${panels}`}
                                        className="flex-grow font-medium"
                                    >
                                        Donate {panels} Solar Panel
                                        {panels > 1 ? "s" : ""}
                                    </label>
                                    <span className="font-bold">${amount}</span>
                                </div>
                                {selectedPanels === panels && (
                                    <div className="mt-3 text-sm text-gray-600">
                                        <p>Your donation of ${amount} will:</p>
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
                                                {amount * 7.27} in value over
                                                the system's lifetime
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
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
                            {customQuantity && (
                                <div className="mt-3 text-sm text-gray-600">
                                    <p>
                                        Your donation of $
                                        {Number.parseInt(customQuantity) * 550}{" "}
                                        will:
                                    </p>
                                    <ul className="list-disc list-inside mt-2">
                                        <li>
                                            Install {customQuantity}{" "}
                                            high-efficiency solar panels
                                        </li>
                                        <li>
                                            Generate approximately{" "}
                                            {Number.parseInt(customQuantity) *
                                                1.5}{" "}
                                            MWh of clean energy annually
                                        </li>
                                        <li>
                                            Offset about{" "}
                                            {Number.parseInt(customQuantity) *
                                                1.2}{" "}
                                            tons of CO2 each year
                                        </li>
                                        <li>
                                            Provide an estimated $
                                            {Number.parseInt(customQuantity) *
                                                550 *
                                                7.27}{" "}
                                            in value over the system's lifetime
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <Button
                        onClick={handleCheckout}
                        disabled={!selectedPanels}
                        variant="destructive"
                        className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] mt-4"
                    >
                        GO TO CHECKOUT
                    </Button>
                </div>
            </div>
        </section>
    );
}
