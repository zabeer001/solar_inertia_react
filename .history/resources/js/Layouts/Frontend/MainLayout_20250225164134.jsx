import React from "react";
import Footer from "./Partials/Footer";
import { AdminDashboardTabsList } from "../Backend/Partials/dashboard";
import { Header } from "@/Components/header";
import { MainContent } from "../../Components/main-content";

function MainLayout({ children }) {
    return (
        <div>
            <header>
                <Header />
            </header>
            {children}

            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default MainLayout;
