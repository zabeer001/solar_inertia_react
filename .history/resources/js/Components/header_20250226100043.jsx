import { Link, usePage } from "@inertiajs/react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#4CAF50]">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <div
                        className="h-12 w-12 bg-contain bg-no-repeat bg-center"
                        style={{
                            backgroundImage:
                                "url('/placeholder.svg?height=48&width=48')",
                        }}
                    />
                </Link>
                <nav className="flex items-center space-x-8">
                    <Link
                        href="/foundation"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        The Foundation
                    </Link>
                    <Link
                        href="/gallery"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/about-solar"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        About Solar
                    </Link>
                    <Link
                        href="/faqs"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        Faqs
                    </Link>
                    <Link
                        href="/checkout"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        Checkout
                    </Link>
                </nav>
            </div>
        </header>
    );
}
