import React from "react";
import { usePage } from "@inertiajs/react";

function Navbar() {
    const { props } = usePage();
    console.log(props.siteDetails); // Access the shared site details
    console.log(props.auth.user); // Access the authenticated user

    return (
        <div>
            {props.siteDetails.map((site, index) => (
                <div key={index} className="w-" {
                    constructor(parameters) {
                        
                    }
                }> 
                    {/* {/ Ensure that logo_url is a valid string /} */}
                    {site.logo_url ? (
                        <img src={site.logo_url} alt="Logo" />
                    ) : (
                        <p>No logo available</p> // Show a fallback message if logo_url is not available
                    )}
                </div>
            ))}
        </div>
    );
}

export default Navbar;
