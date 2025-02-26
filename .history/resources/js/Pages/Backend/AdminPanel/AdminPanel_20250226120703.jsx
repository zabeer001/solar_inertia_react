import React from "react";
import { Link } from "@inertiajs/react"; // Import Inertia Link
import BackendLayout from "@/Layouts/Backend/BackendLayout";

const Home = ({ test101 }) => {
    function zabeer() {
        console.log("hello");
    }

    return (
        <div>
            <h1>zabeer</h1>
        </div>
    );
};

Home.layout = (page) => <BackendLayout>{page}</BackendLayout>;
export default Home;
