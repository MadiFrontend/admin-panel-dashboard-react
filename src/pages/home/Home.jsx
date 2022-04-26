// import { useState } from "react";

import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
// import { UserData } from "../../Data";

export default function Home() {
    // const [userData, setUserData] = useState({
    //     labels: UserData.map((data) => data.year),
    //     datasets: [
    //         {
    //             label: "",
    //             data: UserData.map((data) => data.userGain),
    //             backgroundColor: ["rgba(75,192,192,1)"],
    //             borderColor: "cyne",
    //             borderWidth: 1,
    //         },
    //     ],
    // });

    return (
        <div className="home">
            <FeaturedInfo />
            {/* <div style={{ width: 500 }}>
                <Chart chartData={userData}  />
            </div> */}
            <Chart />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
