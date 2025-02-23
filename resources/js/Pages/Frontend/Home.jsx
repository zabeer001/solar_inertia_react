import React from 'react';
import { Link } from '@inertiajs/react'; // Import Inertia Link
import MainLayout from '@/Layouts/Frontend/MainLayout';

const Home = ({ siteDetails }) => {

    // data from zabeer
        console.log(siteDetails);

    return (
        <div>
            <h1>Site Details Page</h1>
        

            <ul>
                {siteDetails.map((site, index) => (
                    <li key={index}>
                        <strong>Main Image:</strong>
                        {site.main_image_url && (
                            <img src={site.main_image_url} alt="Main Image" width="200" />
                        )}
                        <br />
                        <strong>Gallery Image 1:</strong>
                        {site.gallery_image_1_url && (
                            <img src={site.gallery_image_1_url} alt="Gallery Image 1" width="200" />
                        )}
                        <br />
                        <strong>Gallery Image 2:</strong>
                        {site.gallery_image_2_url && (
                            <img src={site.gallery_image_2_url} alt="Gallery Image 2" width="200" />
                        )}
                        <br />
                        <strong>Logo:</strong>
                        {site.logo && (
                            <img src={site.logo_url} alt="Logo" width="100" />
                        )}
                        <br />
                        <strong>Hero Title:</strong> {site.hero_title} <br />
                        <strong>Hero Description:</strong> {site.hero_description} <br />
                        <strong>Card Text:</strong> {site.card_text} <br />
                        <strong>Card Button:</strong> {site.card_btn} <br />
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

Home.layout = page => <MainLayout>{page}</MainLayout>;
export default Home;
