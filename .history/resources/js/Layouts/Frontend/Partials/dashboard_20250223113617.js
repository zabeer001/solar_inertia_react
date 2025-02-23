import { MdOutlineDashboard } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

import { TbTargetArrow } from "react-icons/tb";
import { CiImageOn, CiSettings } from "react-icons/ci";
import { FaFileMedical } from "react-icons/fa";
import { FaFileAlt, FaChartBar } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

export const AdminDashboardTabsList = [
    {
        id: crypto.randomUUID(),
        path: "/dashboard/",
        icon: MdOutlineDashboard,
        linkText: "Dashboard",
        roles: ["admin"],
    },
    {
        id: crypto.randomUUID(),
        path: "/dashboard/upload-images",
        icon: CiImageOn,
        linkText: "Upload Images",
        roles: ["admin"],
    },
    {
        id: crypto.randomUUID(),
        path: "/dashboard/manage-targets",
        icon: TbTargetArrow,
        linkText: "Manage Targets",
        roles: ["admin"],
    },
    {
        id: crypto.randomUUID(),
        path: "/dashboard/create-tmc-target",
        icon: FaFileMedical,
        linkText: "Create TMC Target",
        roles: ["admin"],
    },
    {
        id: crypto.randomUUID(),
        path: "/dashboard/create-arv-target",
        icon: FaFileAlt,
        linkText: "Create ARV Target",
        roles: ["admin"],
    },
    {
        id: crypto.randomUUID(),
        path: "/dashboard/user-results",
        icon: FaChartBar,
        linkText: "User Results",
        roles: ["admin"],
    },
    {
        id: crypto.randomUUID(),
        path: "/dashboard/email-manager",
        icon: IoMdMail,
        linkText: "Email Manager",
        roles: ["admin"],
    },
    {
        id: crypto.randomUUID(),
        path: "/dashboard/image-gallery",
        icon: GrGallery,
        linkText: "Image Gallery",
        roles: ["admin"],
    },
    {
        id: crypto.randomUUID(),
        path: "/dashboard/settings",
        icon: CiSettings,
        linkText: "Settings",
        roles: ["admin"],
    },
];
