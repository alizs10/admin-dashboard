import ShoppingCartIcon from "@/components/dashboard/common/ui/icons/ShoppingCartIcon";
import Card from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import DollarIcon from "@/components/dashboard/common/ui/icons/DollarIcon";
import UsersIcon from "@/components/dashboard/common/ui/icons/UsersIcon";
import Activities from "./Activities";

export default function Cards() {

    return (
        <div className="grid grid-cols-4 gap-8">
            <div className="col-span-3 grid grid-cols-3 gap-8">

                <Card key={22} space={'card-1'}>
                    <CardHeader title={'Sales'} time={'Today'} />
                    <CardBody icon={<ShoppingCartIcon />} value={'120'} colorScheme={'blue'} />
                </Card>
                <Card key={222} space={'card-1'}>
                    <CardHeader title={'Revenue'} time={'This Month'} />
                    <CardBody icon={<DollarIcon />} value={'$3,240'} colorScheme={'green'} />
                </Card>
                <Card key={2222} space={'card-1'}>
                    <CardHeader title={'Customers'} time={'This Year'} />
                    <CardBody icon={<UsersIcon />} value={'144'} colorScheme={'orange'} />
                </Card>
            </div>
            <div className="col-span-1 grid grid-cols-1 -z-10 gap-8">
                <Card key={5} space={'card-1'}>
                    <CardHeader title={'Recent Activities'} time={'Today'} />
                    <Activities />
                </Card>
            </div>
        </div>
    )
}