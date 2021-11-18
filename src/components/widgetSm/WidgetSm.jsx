import React from 'react';
import "./widgetSm.css";
import Auction from './../Auction/Auction';

const WidgetSm = () => {
  return (
     <div className="widgetSm">
      <span className="widgetSmTitle">Auction</span>
       <Auction />
    </div>
  );
}

export default WidgetSm;
