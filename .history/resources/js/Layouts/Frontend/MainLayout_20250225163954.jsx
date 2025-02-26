import React from "react";
import Navbar from "./Partials/Navbar";
import Footer from "./Partials/Footer";
import { Sidebar } from "@/Layouts/Backend/Partials/Sidebar";
import { AdminDashboardTabsList } from "../Backend/Partials/dashboard";
import { Header } from "@/Components/header";

function MainLayout({ children }) {
    return (
        <div>
            <header>
                <Header />
            </header>
<MainLayout
            {children}

            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default MainLayout;
