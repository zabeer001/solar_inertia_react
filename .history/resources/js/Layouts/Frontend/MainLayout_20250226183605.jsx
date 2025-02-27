import React from "react";
import Footer from "./Partials/Footer";
import { Header } from "@/Layouts/Frontend/Partials/header";

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            
            {children}
            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default MainLayout;
