import ShoppingCartIcon from "@/components/dashboard/common/ui/icons/ShoppingCartIcon";

function CardBody({ colorScheme, value, icon }) {

    // color schemes: blue, green, orange

    let greenClasses = 'bg-green-200/50 text-green-500';
    let orangeClasses = 'bg-orange-200/50 text-orange-500';
    let blueClasses = 'bg-blue-200/50 text-blue-500';

    let scheme = 'bg-green-200/50 text-green-500'

    switch (colorScheme) {
        case 'blue':
            scheme = blueClasses
            break;
        case 'green':
            scheme = greenClasses
            break;
        case 'orange':
            scheme = orangeClasses
            break;

        default:
            scheme = greenClasses
            break;
    }

    return (
        <div className="flex gap-x-4">
            <div className={`h-20 aspect-square rounded-full flex justify-center items-center ${scheme}`}>
                <div className="h-8 w-8">
                    {icon}
                </div>
            </div>
            <div className="flex flex-col justify-center gap-y-1">
                <span className="text-xl text-blue-900 font-bold">{value}</span>
                <div className="flex items-center gap-x-2">
                    <span className="text-sm text-green-600 font-bold">24%</span>
                    <span className="text-xs text-slate-400">increase</span>
                </div>
            </div>
        </div>
    );
}

export default CardBody;