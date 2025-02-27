import { Progress } from "@/Components/ui/progress";

export function ProgressSection() {
    const totalPanels = 2727;
    const remainingPanels = 863;
    const installedPanels = totalPanels - remainingPanels;
    const progressPercentage = (installedPanels / totalPanels) * 100;

    const totalGoal = 1500000;
    const amountRaised = 1020000;
    const fundingProgress = (amountRaised / totalGoal) * 100;

    return (
        <section className=" border-t-[30px] border-green-600">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] ">
                    <div className="h-full bg-green-100 p-16">
                        <div className="text-4xl font-bold">{totalPanels}</div>
                        <div className="text-gray-600">Total Panels</div>
                    </div>
                    <div className="bg-green-100 p-16 *:text-green-600">
                        <div className="text-4xl font-bold ">
                            {remainingPanels}
                        </div>
                        <div className="text-gray-600">Panels Remaining</div>
                    </div>
                    <div className="space-y-2 bg-green-100 p-16">
                        <div className="text-xl md:text- font-black">
                            Total ${totalGoal.toLocaleString()}
                        </div>
                        <Progress value={fundingProgress} className="h-2" />
                        <div className="flex justify-between text-sm text-gray-600 ">
                            <span className="text-green-600">
                                ${amountRaised.toLocaleString()} Raised
                            </span>
                            <span>{Math.round(fundingProgress)}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
