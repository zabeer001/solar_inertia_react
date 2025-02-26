import React from "react";

function Navbar() {
    console.log(props.siteDetails); // Access the shared site details
    console.log(props.auth.user); // Access the authenticated user
    return (<div>this is backend navbar</div>);
}

export default Navbar;
