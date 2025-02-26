import { Link, usePage } from "@inertiajs/react";

export function Header() {
    const { props } = usePage();
    const logo = props.siteDetails[0].logo_url;
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-green-">
            <div className="container mx-auto px-4  flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <div
                        className="w-24 bg-contain bg-no-repeat bg-center h-24 absolute top-0"
                        style={{
                            backgroundImage: `url(${logo})`,
                        }}
                    />
                </Link>
                <nav className="flex items-center space-x-8 *:font-black *:text-xl *:my-6">
                    <Link
                        href="/foundation"
                        className="text-black hover:text-gray-900"
                    >
                        The Foundation
                    </Link>
                    <Link
                        href="/gallery"
                        className="text-black hover:text-gray-900"
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/about-solar"
                        className="text-black hover:text-gray-900"
                    >
                        About Solar
                    </Link>
                    <Link
                        href="/faqs"
                        className="text-black hover:text-gray-900"
                    >
                        Faqs
                    </Link>
                    <Link
                        href="/checkout"
                        className="text-black hover:text-gray-900"
                    >
                        Checkout
                    </Link>
                </nav>
            </div>
        </header>
    );
}
