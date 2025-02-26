import React from "react";
import Footer from "./Partials/Footer";
import { Header } from "@/Components/header";

function MainLayout() {
    return (
        <div>
            <header>
                <Header />
            </header>


            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default MainLayout;
