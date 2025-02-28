import React, { useEffect } from "react";
import Footer from "./Partials/Footer";
import { Header } from "@/Layouts/Frontend/Partials/header";
import { Hero } from "./Partials/Hero";
import { ProgressStats } from "@/Components/progress-stats";
import { ToastContainer, toast } from "react-toastify";
import { usePage } from "@inertiajs/react";

function MainLayout({ children }) {
    const { props } = usePage();
    const message = props.flash.message.message;
    // console.warn(message);

    const notifySuccess = () =>
        toast.success(message, {
            className: "bg-green-200",
        });

    // const notifyError = () =>
    //     toast.warning(message || "Hello", {
    //         className: "bg-red-500 text-white",
    //     });

    useEffect(() => {
        notifySuccess();
    }, []);
    return (
        <div>
            <Header />
            <ToastContainer />
            <Hero />
            <ProgressStats />
            {/* <h1 className="bg-blue-500 p-4 text-4xl" onClick={notify}>
                successMessage
            </h1> */}
            {children}
            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
}

export default MainLayout;
