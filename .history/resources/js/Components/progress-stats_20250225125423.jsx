import React from "react";
import { Progress } from "../components/ui/progress"; // Adjust the path as needed

export function ProgressStats() {
    return (
        <section className="bg-[#F1F8E9] py-8">
            <div className="container mx-auto px-4 grid grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center mb-2">
                        <svg
                            className="w-8 h-8 text-[#4CAF50]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="M6 8h12" />
                            <path d="M6 12h12" />
                            <path d="M6 16h12" />
                        </svg>
                    </div>
                    <div className="text-4xl font-bold">2727</div>
                    <div className="text-gray-600">Total Panels</div>
                </div>
                <div className="text-center">
                    <div className="inline-flex items-center justify-center mb-2">
                        <svg
                            className="w-8 h-8 text-[#4CAF50]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="M6 8h12" />
                            <path d="M6 12h12" />
                            <path d="M6 16h12" />
                        </svg>
                    </div>
                    <div className="text-4xl font-bold text-[#4CAF50]">863</div>
                    <div className="text-[#4CAF50]">Panels Remaining</div>
                </div>
                <div>
                    <div className="text-xl font-semibold mb-2">
                        Total $1,500,000
                    </div>
                    <Progress value={68} className="h-2 bg-white" />
                    <div className="flex justify-between text-sm mt-1">
                        <span>$1,020,000 Raised</span>
                        <span>68%</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
