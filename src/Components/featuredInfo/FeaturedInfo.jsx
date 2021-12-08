import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,222</span>
          <span className="featuredMoneyRate">
            -11.12 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared To Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,622</span>
          <span className="featuredMoneyRate">
            -1.12 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared To Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$15,222</span>
          <span className="featuredMoneyRate">
            +11.12 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared To Last Month</span>
      </div>
    </div>
  );
}
