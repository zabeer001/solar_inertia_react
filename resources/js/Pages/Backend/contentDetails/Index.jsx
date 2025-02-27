import React from "react";
import { router } from "@inertiajs/react";
import BackendLayout from "@/Layouts/Backend/BackendLayout";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Index({ siteDetails }) {
    console.log(siteDetails);

    const handleEdit = (id) => {
        // Implement edit functionality here
        router.get(route("contents.edit", { id }));
        console.log(`Edit content with ID: ${id}`);
    };

    const handleDelete = (id) => {
        // Implement delete functionality here
        console.log(`Delete content with ID: ${id}`);
    };

    return (
        <div>
            <h2>
                <strong>Content Details</strong>
            </h2>

            <div className="flex justify-end">
                <button
                    onClick={() => router.get(route("contents.create"))}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Create
                </button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Icon Image</TableHead>
                        <TableHead>Content Title</TableHead>
                        <TableHead>Content Description</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {siteDetails.map((site, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                {site.icon_image && (
                                    <img
                                        src={`/uploads/${site.icon_image}`}
                                        height="50"
                                        alt={"Icon Image"}
                                        width="100"
                                        className="w-[150px] h-[75px] rounded-md"
                                    />
                                )}
                            </TableCell>
                            <TableCell className="font-medium">
                                {site.content_title}
                            </TableCell>
                            <TableCell>{site.content_description}</TableCell>
                            <TableCell className="text-right">
                                <button
                                    onClick={() => handleEdit(site.id)}
                                    className="btn btn-primary btn-sm mx-1"
                                >
                                    <FaEdit className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => handleDelete(site.id)}
                                    className="btn btn-danger btn-sm mx-1"
                                >
                                    <MdDelete className="h-5 w-5" />
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

Index.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default Index;
