import Activity from "./Activity";

function Activities() {
    return (
        <div className="flex flex-col gap-0">

            <Activity key={1} color={'blue'} />
            <Activity key={2} color={'green'} />
            <Activity key={3} color={'orange'} />
            <Activity key={4} color={'red'} />
            <Activity key={5} color={'yellow'} />
            <Activity key={6} color={'purple'} />

        </div>
    );
}

export default Activities;