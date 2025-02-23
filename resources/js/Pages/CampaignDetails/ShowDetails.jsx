import React from "react";

const ShowDetails = ({ data }) => {
    return (
        <div className="max-w-lg mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">
                Campaign Details
            </h1>
            {data ? (
                <div>
                    <p>
                        <strong>Target:</strong> {data.target}
                    </p>
                    <p>
                        <strong>Number of Solar Panels:</strong>{" "}
                        {data.no_solar_panels}
                    </p>
                    <p>
                        <strong>Energy Saved:</strong> {data.energy_saved}
                    </p>
                </div>
            ) : (
                <p>No campaign data available.</p>
            )}
        </div>
    );
};

export default ShowDetails;
