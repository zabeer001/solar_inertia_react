import React from "react";
import { usePage } from "@inertiajs/react";

function Navbar() {
    const { props } = usePage();
    console.log(props.siteDetails); // Access the shared site details
    console.log(props.auth.user); // Access the authenticated user

    return (
        <div>
            <nav>
                <img src={} alt="" />
            </nav>
        </div>
    );
}

export default Navbar;
