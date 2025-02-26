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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-green-600">
                    <div className="text-center h-full border-r-2  bg-green-100 p-12">
                        <div className="text-4xl font-bold">{totalPanels}</div>
                        <div className="text-gray-600">Total Panels</div>
                    </div>
                    <div className="text-center border-r-2  bg-green-100 p-12">
                        <div className="text-4xl font-bold ">
                            {remainingPanels}
                        </div>
                        <div className="text-gray-600">Panels Remaining</div>
                    </div>
                    <div className="space-y-2  bg-green-100 p-12">
                        <div className="text-xl font-semibold">
                            Total ${totalGoal.toLocaleString()}
                        </div>
                        <Progress value={fundingProgress} className="h-2" />
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>${amountRaised.toLocaleString()} Raised</span>
                            <span>{Math.round(fundingProgress)}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
