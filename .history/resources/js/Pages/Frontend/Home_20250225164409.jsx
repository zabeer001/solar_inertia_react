import React from "react";
import { Link } from "@inertiajs/react"; // Import Inertia Link
import MainLayout from "@/Layouts/Frontend/MainLayout";

const Home = ({ siteDetails }) => {
    // data from zabeer
    console.log(siteDetails);

    return <div>
        
    </div>;
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Home;
