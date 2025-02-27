import React from "react";
import { Link, usePage } from "@inertiajs/react"; // Import Inertia Link
import BackendLayout from "@/Layouts/Backend/BackendLayout";

const Home = ({ test101 }) => {
    const {props} = usePage()
    
    function greet(){
        return <h1 className="md:text-4xl text-3xl font-black m-8">Welcome to Dashboard,  {props.auth.user.name}!</h1>
    }
   

    return (
        <div className="bg-white h-full flex items-center justify-center shadow-lg rounded-lg my-6">
            {greet()}
        </div>
    );
};

Home.layout = (page) => <BackendLayout>{page}</BackendLayout>;
export default Home;
