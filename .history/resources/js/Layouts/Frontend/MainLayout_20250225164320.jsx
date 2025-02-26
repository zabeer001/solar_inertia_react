import React from "react";
import Footer from "./Partials/Footer";
import { Header } from "@/Components/header";

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
