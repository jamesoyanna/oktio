import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./dashboard.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import Activity from '../../components/Activity/Activity';
const Dashboard = () => {
  return (
    <>
 
   <div className="dashboard">
        <h2>Dashboard</h2>
      <FeaturedInfo />
      <div className="homeWidgets">
        <WidgetSm/>
         <Activity />
        
      </div>
    </div>   
    </>
  );
}

export default Dashboard;
