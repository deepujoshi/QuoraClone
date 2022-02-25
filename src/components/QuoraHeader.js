import React from 'react'
import HomeIcon from "@material-ui/icons/Home"
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  // Close,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  // ExpandMore,
} from "@material-ui/icons";
// import CloseIcon from "@material-ui/icons/Close";
import { Avatar, Button,} from "@material-ui/core";
import "./css/QuoraHeader.css";

function QuoraHeader() {
  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo"> 
          <img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif" alt = "logo" />
            <div className="qHeader__icons">
              <div className="qHeader__icon"><HomeIcon /></div>
              <div className="qHeader__icon"><FeaturedPlayListOutlinedIcon /></div>
              <div className="qHeader__icon"><AssignmentTurnedInOutlined /></div>
              <div className="qHeader__icon"><PeopleAltOutlined /></div>
              <div className="qHeader__icon"><NotificationsOutlined /></div>
            </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
          <span>
            <Avatar />
          </span>
          <Button >Add Question</Button>
          </div>
      </div>
    </div>
  )
}

export default QuoraHeader;
