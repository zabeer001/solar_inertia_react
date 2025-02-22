import React from 'react';
import { Link } from '@inertiajs/react'; // Import Inertia Link
import MainLayout from '@/Layouts/Frontend/MainLayout';

const Home = ({ test101 }) => {
    function zabeer() {
        console.log('hello');
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>{test101}</p> {/* Display the Laravel prop */}
            <button onClick={zabeer}>Click Me</button>

            {/* Link to the Blade Check Route */}
            <div>
                <a href={route('frontend.home.checkBlade')} style={{ color: 'blue', textDecoration: 'underline' }}>
                    Go to Blade Check
                </a>
            </div>
        </div>
    );
}

Home.layout = page => <MainLayout>{page}</MainLayout>;
export default Home;
