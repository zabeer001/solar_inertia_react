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
        path: "/admin/dashboard/",
        icon: MdOutlineDashboard,
        linkText: "Dashboard",
        roles: ["admin"],
    },
    {
        id: crypto.randomUUID(),
        path: "/dashboard/upload-images",
        icon: CiImageOn,
        linkText: "Manage Designs",
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
        path: "/admin/site-details",
        icon: FaFileAlt,
        linkText: "Hero Sections",
        roles: ["admin"],
    },
    {
        id: crypto.randomUUID(),
        path: "contents",
        icon: FaFileAlt,
        linkText: "Content Sections",
        roles: ["admin"],
    },
    {
        id: crypto.randomUUID(),
        path: "/admin/campaign-details",
        icon: FaFileAlt,
        linkText: "Campaign Sections",
        roles: ["admin"],
    },
];
