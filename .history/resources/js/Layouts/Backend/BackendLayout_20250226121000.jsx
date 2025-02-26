import React from "react";
import Navbar from "./Partials/Navbar";
import Footer from "./Partials/Footer";
import { Sidebar } from "@/Layouts/Backend/Partials/Sidebar";
import { AdminDashboardTabsList } from "@/Layouts/Backend/Partials/dashboard";

function BackendLayout({ children }) {
    return (
        <div>
          

            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default BackendLayout;
