import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Supplier activity</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">A</span>
            <span className="widgetSmUserTitle">B</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">A</span>
            <span className="widgetSmUserTitle">B</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
         
          <div className="widgetSmUser">
            <span className="widgetSmUsername">A</span>
            <span className="widgetSmUserTitle">B</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">A</span>
            <span className="widgetSmUserTitle">B</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
