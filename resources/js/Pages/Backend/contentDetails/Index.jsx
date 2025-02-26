import React from 'react';
import BackendLayout from '@/Layouts/Backend/BackendLayout';

function Index({ siteDetails }) {
    console.log(siteDetails);

    const handleEdit = (id) => {
        // Implement edit functionality here
        console.log(`Edit content with ID: ${id}`);
    };

    const handleDelete = (id) => {
        // Implement delete functionality here
        console.log(`Delete content with ID: ${id}`);
    };

    return (
        <div>
            <h1>Content Details</h1>
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Icon Image</th>
                        <th>Content Title</th>
                        <th>Content Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {siteDetails.map((site, index) => (
                        <tr key={index}>
                            <td>
                                {site.icon_image_url && (
                                    <img src={site.icon_image_url} alt="Icon Image" width="100" />
                                )}
                            </td>
                            <td>{site.content_title}</td>
                            <td>{site.content_description}</td>
                            <td>
                                <button onClick={() => handleEdit(site.id)} className="btn btn-primary btn-sm">
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(site.id)}
                                    className="btn btn-danger btn-sm"
                                    style={{ marginLeft: '10px' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

Index.layout = page => <BackendLayout>{page}</BackendLayout>;

export default Index;
