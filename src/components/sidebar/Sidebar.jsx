import "./sidebar.css";
import {
 People,
  Storefront,
  HelpOutlineOutlined,
  Settings,
  AccountBalanceWallet
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
                <AccountBalanceWallet className="sidebarIcon" />
               
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                
              </li>
            </Link>
           
            <li className="sidebarListItem">
              <People className="sidebarIcon" />
              
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
            </li>

             <li className="sidebarListItem">
              <HelpOutlineOutlined className="sidebarIcon" />
              
            </li>
           
           
          </ul>
        </div>
      </div>
    </div>
  );
}
