import { useEffect } from "react";

const PowerBi_Reports = () => {
    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    return (
        <div className="relative w-full pb-[47.45%] h-0">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                title="Sprinkle_Inventory_Report"
                src="https://app.powerbi.com/view?r=eyJrIjoiYzJjYTc3YzEtYjYzMi00ZGU4LTg1OTAtMDQ4OTEwM2Y0NGQ5IiwidCI6IjlhNjU4Yzg4LWI3Y2EtNDJkYS04NmJmLWJiMjZmMWViZjY2YiIsImMiOjEwfQ%3D%3D"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default PowerBi_Reports;
