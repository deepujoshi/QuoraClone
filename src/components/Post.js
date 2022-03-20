import {Avatar} from "@material-ui/core";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import React from 'react';
import "./css/Post.css";

function Post() {
  return (
 <div className='post'>
    <div className='post__info'>
        <Avatar  />
        <h4>User Name</h4>
        <small>TimeStamp</small>
     </div>
    <div className='post__body'>
      <p>This is test questions</p>
      <button className="post__btnAnswer">answer</button>
    </div>
       <div className='post__footer'>
         <div className="post__footerActions">
            <ArrowUpwardOutlined />
            <ArrowDownwardOutlined />
         </div>
         <RepeatOneOutlined />
         <ChatBubbleOutlined />
           <div className="post__footerLeft">
             <ShareOutlined />
             <MoreHorizOutlined />
           </div>
        </div>
    </div>
  );
}

export default Post;
