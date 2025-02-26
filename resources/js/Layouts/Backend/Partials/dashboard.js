import { MdOutlineDashboard } from "react-icons/md";

import { TbTargetArrow } from "react-icons/tb";
import { CiImageOn} from "react-icons/ci";
import { FaFileMedical } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

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
];
