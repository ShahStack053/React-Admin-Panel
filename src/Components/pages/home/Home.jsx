import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../../DummyData";
import WidgetSm from "../../widgets/widgetSm/WidgetSm";
import WidgetLg from "../../widgets/widgetLg/WidgetLg";

export default function Home() {
  console.log(userData);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="Users Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetLg />
        <WidgetSm />
      </div>
    </div>
  );
}
