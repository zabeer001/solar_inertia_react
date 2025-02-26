import { usePage } from "@inertiajs/react";
import React from "react";
export function Hero() {
    const { props } = usePage();
    const heroImg = props.siteDetails[0].main_image_url;
    console.log(props);

    return (
        <section className="relative h-full">
            <div
                className="absolute object-cover bg-center h-screen w-screen"
                style={{
                    backgroundImage: `url(${heroImg})`,
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-end text-white">
                <h1 className="text-5xl md:text-6xl font-bold max-w-3xl leading-tight">
                    Powering a
                    <br />
                    Sustainable Future
                    <br />
                    with Solar Energy
                </h1>
                <p className="mt-6 text-lg max-w-2xl">
                    Join us in building a brighter future for The Indian Hill
                    School District by donating to help install a solar array on
                    the roof of our new Sports Complex. Your tax-deductible
                    charitable contribution will support the school, protect the
                    environment, and create lasting financial benefits for our
                    entire community.
                </p>
            </div>
        </section>
    );
}
