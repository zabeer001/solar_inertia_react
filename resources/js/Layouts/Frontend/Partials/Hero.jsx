import { ProgressSection } from "@/Components/progress-section";
import { usePage } from "@inertiajs/react";
import React from "react";
export function Hero() {
    const { props } = usePage();
    console.log(props);
    
    const heroImg = props.siteDetails.main_image_url;
    console.log(heroImg);

    return (
        <section className="relative h-[75vh] w-screen">
            <div
                className="absolute object-cover bg-center h-full w-screen"
                style={{
                    backgroundImage: `url(${props.siteDetails.main_image_url})`,
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
                <h1 className="text-5xl md:text-7xl font-extrabold max-w-3xl leading-tight">
                    {props.siteDetails.hero_title}
                </h1>
                <p className="mt-6 text-lg max-w-2xl">
                    {props.siteDetails.hero_description}
                </p>
            </div>
        </section>
    );
}
