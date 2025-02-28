import React from "react";
import MainLayout from "@/Layouts/Frontend/MainLayout";
import { usePage } from "@inertiajs/react";
import { MainContent } from "@/Components/main-content";

const Home = () => {
    const { props } = usePage();

    const mainContent = props.homePageContents;
    const galleryImg1 = props.siteDetails.gallery_image_1_url;
    const galleryImg2 = props.siteDetails.gallery_image_2_url;
    console.log(mainContent);
    return (
        <div>
            <MainContent content={mainContent} />
            <div>
                <h1 className="text-3xl font-semibold">Project Gallery:</h1>
                <div className="flex h-screen">
                    <div className="flex-1">
                        <img src={galleryImg1} alt="" />
                    </div>
                    <div className="flex-1">
                        <img src={galleryImg2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Home;
