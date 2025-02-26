import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export function DonationOptions() {
    const { toast } = useToast();
    const [customQuantity, setCustomQuantity] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const donationOptions = [
        { panels: 1, amount: 550 },
        { panels: 2, amount: 1100 },
        { panels: 3, amount: 1650 },
        { panels: 4, amount: 2200 },
        { panels: 5, amount: 2750 },
    ];

    const handleDonate = (panels, amount) => {
        setIsProcessing(true);
        // Simulating a redirect
        setTimeout(() => {
            alert(
                `Redirecting to checkout with ${panels} panels for $${amount}`
            );
            setIsProcessing(false);
        }, 1000);
    };

    const handleCustomDonate = () => {
        const quantity = Number.parseInt(customQuantity);
        if (isNaN(quantity) || quantity <= 0) {
            toast({
                variant: "destructive",
                title: "Invalid quantity",
                description: "Please enter a valid number of panels.",
            });
            return;
        }
        handleDonate(quantity, quantity * 550);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container max-w-2xl">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Build a Brighter Future: Select Your Solar Impact
                </h2>
                <div className="space-y-4">
                    {donationOptions.map(({ panels, amount }) => (
                        <Button
                            key={panels}
                            onClick={() => handleDonate(panels, amount)}
                            className="w-full h-auto py-4 text-left flex justify-between items-center"
                            variant={panels === 4 ? "default" : "outline"}
                            disabled={isProcessing}
                        >
                            <span>
                                Donate {panels} Solar Panel
                                {panels > 1 ? "s" : ""}
                            </span>
                            <span>${amount.toLocaleString()}</span>
                        </Button>
                    ))}
                    <div className="relative">
                        <Input
                            type="number"
                            value={customQuantity}
                            onChange={(e) => setCustomQuantity(e.target.value)}
                            placeholder="Enter custom quantity"
                            min="1"
                            className="w-full p-4"
                            disabled={isProcessing}
                        />
                        <Button
                            onClick={handleCustomDonate}
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                            disabled={!customQuantity || isProcessing}
                        >
                            Calculate
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
