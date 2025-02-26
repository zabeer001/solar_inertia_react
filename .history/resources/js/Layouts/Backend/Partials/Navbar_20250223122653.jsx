import React from "react";
import { usePage } from "@inertiajs/react";

function Navbar() {
    const { props } = usePage();
    console.log(props.siteDetails); // Access the shared site details
    console.log(props.auth.user); // Access the authenticated user
    return (
        <div>
            {props.siteDetails.map((site, index) => (
                <div key={index}>
                    <img src={site.logo_url} alt="LOgo" />

                    {/ Other site details /}
                </div>
            ))}
        </div>
    );
}

export default Navbar;
