import React from "react";
import MainLayout from "@/Layouts/Frontend/MainLayout";
import { usePage } from "@inertiajs/react";
import { MainContent } from "@/Components/main-content";

const Home = () => {
    const { props } = usePage();

    const galleryImg1 = props.siteDetails.gallery_image_1_url;
    const galleryImg2 = props.siteDetails.gallery_image_2_url;
    return (
        <div className="scroll-smooth  ">
            <MainContent content={props} />
            <div className="container mx-auto md:pt-24" id="gallery">
                <h1 className="text-4xl font-extrabold mb-8">
                    Project Gallery:
                </h1>
                <div className="flex gap-16 items-center justify-center">
                    <div className="flex-1">
                        <img src={galleryImg1} alt="" className="rounded-3xl" />
                    </div>
                    <div className="flex-1">
                        <img src={galleryImg2} alt="" className="rounded-3xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Home;
