import React from "react";
import MainLayout from "@/Layouts/Frontend/MainLayout";
import { usePage } from "@inertiajs/react";
import { MainContent } from "@/Components/main-content";

const Home = () => {
    const { props } = usePage();

    const mainContent = props.homePageContents;
    const galleryImg1 = props.siteDetails.
    console.log(mainContent);
    return (
        <div>
            <MainContent content={mainContent} />
            <div className="flex">
                <div className="flex-1">
                    <img src={} alt="" />
                </div>
            </div>
        </div>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Home;
