import React from "react";
import Footer from "./Partials/Footer";
import { Header } from "@/Layouts/Frontend/Partials/header";
import { Hero } from "./Partials/Hero";
import { ProgressStats } from "@/Components/progress-stats";

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <Hero/>
            <ProgressStats/>
            {children}
            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default MainLayout;
