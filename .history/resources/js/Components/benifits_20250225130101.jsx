import { HardHat, Sun, Leaf } from "lucide-react";

export function Benefits() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-4">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                            <HardHat className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold">
                            Community Powered
                        </h3>
                        <p className="text-gray-600">
                            What better way to fuel our growth and create
                            lasting change than by working together with our
                            alumni, families, and friends? Your generosity can
                            turn this opportunity into reality—saving our school
                            money and making a positive impact on the
                            environment for generations to come.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                            <Sun className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold">
                            160 kW Solar Power System
                        </h3>
                        <p className="text-gray-600">
                            Our cutting-edge solar installation, featuring 280
                            high-efficiency solar panels, is designed to harness
                            the sun's power effectively, generating over 206 MWh
                            of clean energy annually.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                            <Leaf className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold">
                            Environmental Impact
                        </h3>
                        <p className="text-gray-600">
                            With this solar installation, we're offsetting 190
                            tons of CO2 annually—equivalent to removing 41 cars
                            from the road and powering 90 homes each year. This
                            impact is also comparable to planting 3,159 trees
                            annually.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
