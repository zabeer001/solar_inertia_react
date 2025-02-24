import React from 'react';
import BackendLayout from '@/Layouts/Backend/BackendLayout';

function Index({ siteDetails }) {
    console.log(siteDetails);

    return (
        <div>
            <h1>Content Details</h1>

            <ul>
                {siteDetails.map((site, index) => (
                    <li key={index}>
                        <strong>Icon Image:</strong>
                        {site.icon_image_url && (
                            <img src={site.icon_image_url} alt="Icon Image" width="100" />
                        )}
                        <br />
                        <strong>Content Title:</strong> {site.content_title} <br />
                        <strong>Content Description:</strong> {site.content_description} <br />
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

Index.layout = page => <BackendLayout>{page}</BackendLayout>;

export default Index;
