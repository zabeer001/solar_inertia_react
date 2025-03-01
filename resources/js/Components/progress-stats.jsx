import React from "react";
import { Progress } from "../components/ui/progress"; // Adjust the path as needed
import { usePage } from "@inertiajs/react";

export function ProgressStats() {
    const { props } = usePage();

    const campaignDetails = props.campaignDetails;
    let c=campaignDetails.no_solar_panels;
    let a=campaignDetails.target;
    let g=props.sales_tracked_sum;
    

    let h=g*c;
    let j=(h/a)*100;    

    if(j<=0){
        j=1;
    }

    console.log("campaign Details", props);

    return (
        <section className="bg-[#F1F8E9] py-8 border-t-[50px] border-[green]/70">
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
                    <div className="text-4xl font-bold">
                        {campaignDetails.no_solar_panels}
                    </div>
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
                    <div className="text-4xl font-bold text-[#4CAF50]">
                        {props.remain_panel}
                    </div>
                    <div className="text-[#4CAF50]">Panels Remaining</div>
                </div>
                <div>
                    <div className="text-xl font-semibold mb-2">
                        Total {campaignDetails.target}
                    </div>
                    <Progress value={j} className="h-2 bg-white" />
                    <div className="flex justify-between text-sm mt-1">
                        <span>
                            $
                            {(
                                 (h ?? 0)
                            ).toFixed(2)}{" "}
                            Raised
                        </span>

                        <span>{j.toFixed(2)}%</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
