import { HardHat, Sun, Leaf } from "lucide-react";

const benefitsData = [
    {
        id: 1,
        title: "Community Powered",
        description:
            "What better way to fuel our growth and create lasting change than by working together with our alumni, families, and friends? Your generosity can turn this opportunity into reality—saving our school money and making a positive impact on the environment for generations to come.",
        icon: (
            <HardHat
                className="h-6 w-6 text-green-600"
                aria-label="Community Powered Icon"
            />
        ),
    },
    {
        id: 2,
        title: "160 kW Solar Power System",
        description:
            "Our cutting-edge solar installation, featuring 280 high-efficiency solar panels, is designed to harness the sun's power effectively, generating over 206 MWh of clean energy annually.",
        icon: (
            <Sun
                className="h-6 w-6 text-green-600"
                aria-label="Solar Power Icon"
            />
        ),
    },
    {
        id: 3,
        title: "Environmental Impact",
        description:
            "With this solar installation, we're offsetting 190 tons of CO2 annually—equivalent to removing 41 cars from the road and powering 90 homes each year. This impact is also comparable to planting 3,159 trees annually.",
        icon: (
            <Leaf
                className="h-6 w-6 text-green-600"
                aria-label="Environmental Impact Icon"
            />
        ),
    },
];

export function Benefits() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-3">
                    {benefitsData.map(({ id, title, description, icon }) => (
                        <div key={id} className="space-y-4">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                {icon}
                            </div>
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <p className="text-gray-600">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
