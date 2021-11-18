import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import Auction from './../Auction/Auction';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Supplier activity</span>
      <ul className="widgetSmList">
     
       <Auction />
      </ul>
    </div>
  );
}
