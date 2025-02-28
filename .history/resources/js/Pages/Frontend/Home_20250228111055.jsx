import React from "react";
import MainLayout from "@/Layouts/Frontend/MainLayout";
import { usePage } from "@inertiajs/react";
import { MainContent } from "@/Components/main-content";
Maincon

const Home = () => {
    const { props } = usePage();

    const mainContent = props.homePageContents
    console.log(mainContent)
    return (
        <div>
            <MainContent content={mainContent} />
        </div>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Home;
