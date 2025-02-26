import { usePage } from "@inertiajs/react";
import React from "react";
export function Hero() {
    // const { props } = usePage();
    // const heroImg = props.siteDetails[0].main_image;
    // console.log(heroImg);

    return (
        <section className="relative h-[500px]">
            {props.siteDetails.map((site, index) => (
                <div key={index} className="w-20">
                    {/* {/ Ensure that logo_url is a valid string /} */}
                    {site.logo_url ? (
                        <img src={site.logo_url} alt="Logo" />
                    ) : (
                        <p>No logo available</p> // Show a fallback message if logo_url is not available
                    )}
                </div>
            ))}
           
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
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
