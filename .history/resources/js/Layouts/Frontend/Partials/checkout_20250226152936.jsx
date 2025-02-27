import { ProgressStats } from "@/components/progress-stats";
import { CheckoutForm } from "@/components/checkout-form";
import { Hero } from "./Hero";

export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <ProgressStats />
            <section className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold mb-2">Checkout</h1>
                    <p className="text-gray-600 mb-8">
                        Please fill in your details below. If you'd like your
                        donation to be made public, you can add a message in the
                        'Additional Information' section.
                    </p>
                    <CheckoutForm />
                </div>
            </section>
            <div className="container mx-auto px-4 py-8 flex justify-center">
                <div
                    className="h-[60px] w-[200px] bg-contain bg-no-repeat bg-center"
                    style={{
                        backgroundImage:
                            "url('/placeholder.svg?height=60&width=200')",
                    }}
                />
            </div>
        </main>
    );
}
