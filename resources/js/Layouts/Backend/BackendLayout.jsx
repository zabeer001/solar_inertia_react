import React from "react";
import Footer from "./Partials/Footer";
import { Sidebar } from "@/Layouts/Backend/Partials/Sidebar";
import { AdminDashboardTabsList } from "@/Layouts/Backend/Partials/dashboard";
import AuthenticatedLayout from "../AuthenticatedLayout";

function BackendLayout({ children }) {
    return (
        <div>
            <Sidebar lists={AdminDashboardTabsList} />
            <div className="px-6 md:ml-[272px] backdrop-blur-sm bg-gray-500/10 h-screen dashboard-shadow ">
            <AuthenticatedLayout/>
                {children}
            </div>

            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default BackendLayout;
