import { Avatar } from '@material-ui/core'
import React from 'react';
import "./css/Quorabox.css";

function QuoraBox() {
  return (
    <div className='quoraBox'>
      <div className='quoraBox__info'>
         <Avatar />
      </div>
      <div className='quoraBox--quora'>
        <p>What is your Question or Link?</p></div>
    </div>
  );
}

export default QuoraBox;