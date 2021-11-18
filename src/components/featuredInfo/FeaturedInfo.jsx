import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Saving</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">200,000 USD</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
      </div>
       <div className="featuredItem">
        <span className="featuredTitle">????</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">????</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">????</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">????</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">????</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">????</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
      </div>
    </div>
  );
}
