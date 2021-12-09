import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Pic from "../../Asset/Img/img1.jpg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topiconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topiconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topiconBadge">4</span>
          </div>
          <img src={Pic} alt="userImage" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
