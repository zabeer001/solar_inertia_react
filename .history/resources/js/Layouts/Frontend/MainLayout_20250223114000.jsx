import React from "react";
import Navbar from "./Partials/Navbar";
import Footer from "./Partials/Footer";
import { Sidebar } from "@/Components/Sidebar";
import { AdminDashboardTabsList } from "../../Components/dashboard";

function MainLayout({ children }) {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <div className="px-4 md:ml-[272px] backdrop-blur-sm bg-[#371B77]/40 dashboard-shadow">
                {children}
            </div>

            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default MainLayout;
