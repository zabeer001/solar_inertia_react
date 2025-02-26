import React from "react";
import Footer from "./Partials/Footer";
import { Header } from "@/Components/header";
import Navbar from "./Partials/Navbar";

function MainLayout({ children }) {
    return (
        <div>
            {/* <Header /> */}
            
            {children}
            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default MainLayout;
