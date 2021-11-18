import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./dashboard.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Dashboard = () => {
  return (
   <div className="dashboard">

      <FeaturedInfo />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        <WidgetLg/>
      </div>
    </div>
  );
}

export default Dashboard;
