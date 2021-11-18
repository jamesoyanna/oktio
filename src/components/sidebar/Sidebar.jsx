import "./sidebar.css";
import {
  LineStyle,
 
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="active">
              <button className="btn">+</button>
            </li>
            </Link>
           
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
               
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
            </li>
           
           
          </ul>
        </div>
      </div>
    </div>
  );
}
