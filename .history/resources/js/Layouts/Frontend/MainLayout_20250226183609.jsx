import React from "react";
import Footer from "./Partials/Footer";
import { Header } from "@/Layouts/Frontend/Partials/header";
import { Hero } from "./Partials/Hero";

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <Hero/>
            {children}
            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default MainLayout;
