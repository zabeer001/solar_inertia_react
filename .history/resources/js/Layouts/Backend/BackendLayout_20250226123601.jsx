import React from "react";
import Navbar from "./Partials/Navbar";
import Footer from "./Partials/Footer";
import { Sidebar } from "@/Layouts/Backend/Partials/Sidebar";
import { AdminDashboardTabsList } from "@/Layouts/Backend/Partials/dashboard";

function BackendLayout({ children }) {
    return (
        <div>
            {/* <Sidebar lists={AdminDashboardTabsList} /> */}
            <div className="px-4 md:ml-[272px] backdrop-blur-sm bg-[#371B77]/20 h-screen dashboard-shadow ">
                {children}
            </div>

            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default BackendLayout;
