import { useState } from "react";
import { usePage, router } from "@inertiajs/react";
import {
    HardHat,
    PenToolIcon as Tool,
    BarChart3,
    PanelTop,
    ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MainContent() {
    const [selectedPanels, setSelectedPanels] = useState(null);
    const [isCustomOpen, setIsCustomOpen] = useState(false);
    const [customQuantity, setCustomQuantity] = useState("");

    const handleDonate = (panels) => {
        setSelectedPanels(selectedPanels === panels ? null : panels);
    };

    const handleCheckout = () => {
        if (selectedPanels) {
            router.get(`/checkout`, {
                panels: selectedPanels,
                amount: selectedPanels * 550,
            });
        }
    };

    const handleCustomQuantityChange = (e) => {
        const value = e.target.value;
        if (
            value === "" ||
            (/^\d+$/.test(value) && Number.parseInt(value) > 5)
        ) {
            setCustomQuantity(value);
        }
    };

    const handleCustomQuantitySubmit = () => {
        const quantity = Number.parseInt(customQuantity);
        if (quantity > 5) {
            handleDonate(quantity);
            setIsCustomOpen(false);
        }
    };

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                    {[
                        {
                            icon: HardHat,
                            title: "Community Powered:",
                            text: "Your generosity...",
                        },
                        {
                            icon: Tool,
                            title: "160 kW Solar Power System:",
                            text: "Our cutting-edge solar installation...",
                        },
                        {
                            icon: BarChart3,
                            title: "Solar Savings:",
                            text: "Adding solar to the facility will save...",
                        },
                        {
                            icon: PanelTop,
                            title: "Environmental Impact:",
                            text: "With this solar installation, we're offsetting...",
                        },
                    ].map(({ icon: Icon, title, text }, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#F1F8E9] flex items-center justify-center">
                                <Icon className="w-6 h-6 text-[#4CAF50]" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">{title}</h3>
                                <p className="text-gray-600">{text}</p>
                            </div>
                        </div>
                    ))}
                    <div className="text-center py-8">
                        <p className="text-gray-800 font-medium mb-4">
                            At Solar Foundation...
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
                    </h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((panels) => (
                            <div key={panels} className="border rounded-md p-4">
                                <div className={`flex items-center space-x-3  py-3 p-2 rounded-md ${}`}>
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
                        <div className="mt-8">
                            <div className="text-gray-600 mb-2">
                                More than 5? Awesome
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() =>
                                        setIsCustomOpen(!isCustomOpen)
                                    }
                                    className="w-full p-3 border rounded-md bg-white flex justify-between items-center"
                                >
                                    <span>
                                        {isCustomOpen
                                            ? "Enter Custom Quantity"
                                            : "Choose Custom Quantity"}
                                    </span>
                                    <ChevronDown
                                        className={`transform transition-transform ${
                                            isCustomOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                {isCustomOpen && (
                                    <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
                                        <div className="p-3 flex items-center space-x-2">
                                            <input
                                                type="number"
                                                value={customQuantity}
                                                onChange={
                                                    handleCustomQuantityChange
                                                }
                                                placeholder="Enter quantity (>5)"
                                                className="flex-grow p-2 border rounded-md"
                                                min="6"
                                            />
                                            <Button
                                                onClick={
                                                    handleCustomQuantitySubmit
                                                }
                                                disabled={
                                                    !customQuantity ||
                                                    Number.parseInt(
                                                        customQuantity
                                                    ) <= 5
                                                }
                                                className="bg-[#4CAF50] hover:bg-[#45a049]"
                                            >
                                                Apply
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
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
