import React from "react";
import MainLayout from "@/Layouts/Frontend/MainLayout";
import { Hero } from "@/Layouts/Frontend/Partials/Hero";
import { usePage } from "@inertiajs/react";

const Home = () => {
     const { props } = usePage();
    return (
        <div>
            <Hero />
        </div>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Home;
