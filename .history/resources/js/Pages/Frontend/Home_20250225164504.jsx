import React from "react";
import { Link } from "@inertiajs/react"; // Import Inertia Link
import MainLayout from "@/Layouts/Frontend/MainLayout";
import AppLayout from "@/Layouts/Frontend/Partials/AppLayout";

const Home = ({ siteDetails }) => {
    // data from zabeer
    console.log(siteDetails);

    return <div>
        <

    </div>;
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Home;
