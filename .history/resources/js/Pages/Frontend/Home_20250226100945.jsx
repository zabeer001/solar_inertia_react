import React from "react";
import { Link } from "@inertiajs/react"; // Import Inertia Link
import MainLayout from "@/Layouts/Frontend/MainLayout";
import AppLayout from "@/Layouts/Frontend/Partials/AppLayout";
import { Hero } from "@/Layouts/Frontend/Partials/Hero";

const Home = () => {
    return (
        <div>
            <Hero />
        </div>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Home;
