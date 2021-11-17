import React from 'react';
import "./topbar.css";
import { NotificationsNone, Settings } from "@material-ui/icons";


const Topbar = () => {
    return (
       <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Oktio</span>
        </div>

      <form>
          <input style={{padding: "5px 15px 2px 10px"}} type="text" />
      </form>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">4</span>
          </div>
          <div className="topbarIconContainer">
       
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
    );
}

export default Topbar;
