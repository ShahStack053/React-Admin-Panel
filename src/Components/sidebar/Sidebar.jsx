import "./sidebar.css";
import {
  LineStyle,
  TrendingUp,
  Timeline,
  PersonOutline,
  Email,
  AttachMoney,
  Report,
  Message,
  Feedback,
  Work,
} from "@material-ui/icons";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcons" />
              home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytic
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcons" />
              sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PersonOutline className="sidebarIcons" />
              Users
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcons" />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcons" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email className="sidebarIcons" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcons" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcons" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Work className="sidebarIcons" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytic
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
