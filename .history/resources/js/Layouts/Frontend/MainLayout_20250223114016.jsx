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

            {children}

            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default MainLayout;
