import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useCallback, useMemo } from "react";
import { CiMenuFries } from "react-icons/ci";
import { usePage } from "@inertiajs/react";
// import Navbar from "@/Layouts/Backend/Partials/Navbar";

export function Sidebar({ lists }) {
    const pathname = window.location.pathname; // Replace usePathname from Next.js
    const [isOpen, setIsOpen] = useState(false);
    const { props } = usePage();

    const logoImg = props.siteDetails[0].logo_url;
    // Close menu callback for performance optimization
    const closeMenu = useCallback(() => setIsOpen(false), []);

    const NavigationContent = useMemo(() => {
        return (
            <nav className="min-w-[272px] flex-1 px-10 backdrop-blur-lg ">
                {lists.map((item) => {
                    const Icon = item.icon;

                    // Normalize paths by removing trailing slashes
                    const normalizedPathname = pathname.replace(/\/$/, "");
                    const normalizedItemPath = item.path.replace(/\/$/, "");

                    // Ensure the default dashboard route is considered active
                    const isActive =
                        normalizedPathname === normalizedItemPath ||
                        (item.path === "/dashboard/" &&
                            normalizedPathname === "/dashboard");

                    return (
                        <Link
                            key={item.id}
                            href={item.path}
                            onClick={closeMenu}
                            aria-current={isActive ? "page" : undefined}
                            aria-label={item.linkText}
                            className={`group relative my-4 mb-1 flex items-center gap-3 rounded-md px-4 py-3 transition-all backdrop-blur-md
                          ${
                              isActive
                                  ? "bg-gradient text-black border-r-2"
                                  : "text-black hover:bg-gradient hover:text-blue-600"
                          }
                        `}
                        >
                            {/* Icon */}
                            <Icon className="h-5 w-5 transition-colors group-hover:text-blue-600" />

                            {/* Link Text */}
                            <span className="font-inter text-sm font-medium leading-[20.3px] transition-colors group-hover:text-blue-600">
                                {item.linkText}
                            </span>

                            {/* Optional: Small Overlay for Better Hover Feedback */}
                            {!isActive && (
                                <span className="absolute inset-0 -z-10 rounded-md bg-gradient opacity-0 transition-opacity group-hover:opacity-100"></span>
                            )}
                        </Link>
                    );
                })}
            </nav>
        );
    }, [lists, pathname, closeMenu]);

    const UserProfile = useMemo(() => {
        return (
            <div className="border-t border-white/10 p-4">
                <div className="flex items-center gap-3">
                    <div>
                        <h3>AV</h3>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white">
                            Alison Eyo
                        </p>
                        <p className="text-xs text-gray-400">
                            alison.e@rayna.ui
                        </p>
                    </div>
                </div>
            </div>
        );
    }, []);

    const MobileHeader = useMemo(() => {
        return (
            <div className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-[#36007B] p-0 md:hidden">
                <Link href="/dashboard" className="flex items-center gap-2">
                    {/* Replace next/image with standard img */}
                    <img
                        src={logoImg}
                        alt="psykick.club"
                        width="194"
                        height="38"
                    />
                </Link>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white"
                        >
                            <CiMenuFries className="h-6 w-6" />
                            <span className="sr-only">
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="w-[300px] bg-[#36007B] p-0 text-white"
                    >
                        <div className="flex h-full flex-col">
                            <div className="p-6">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2"
                                >
                                    <img
                                        src="/assets/img/logo.svg"
                                        alt="psykick.club"
                                        width="120"
                                        height="60"
                                    />
                                </Link>
                            </div>
                            {NavigationContent}
                            {UserProfile}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        );
    }, [isOpen, NavigationContent, UserProfile]);

    const DesktopSidebar = useMemo(() => {
        return (
            <div className="fixed left-0 top-0 hidden h-screen max-w-[354px] flex-col overflow-y-auto md:flex">
                <div className="py-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 justify-center w-20"
                    >
                        {/* <img src={logoImg} alt="Psykick.club" /> */}
                    </Link>
                </div>
                {NavigationContent}
                {UserProfile}
            </div>
        );
    }, [NavigationContent, UserProfile]);

    return (
        <>
            {MobileHeader}
            {DesktopSidebar}
        </>
    );
}
