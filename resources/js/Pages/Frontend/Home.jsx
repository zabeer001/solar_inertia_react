import React from "react";
import MainLayout from "@/Layouts/Frontend/MainLayout";
import { usePage } from "@inertiajs/react";
import { MainContent } from "@/Components/main-content";

const Home = () => {
    const { props } = usePage();

    // const mainContent = props.homePageContents
    console.log("hi", props);
    return (
        <div>
            <MainContent content={props} />
        </div>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Home;
