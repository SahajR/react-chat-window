import React, { Component } from 'react';
import moment from 'moment';

const EmojiMessage = (props) => {
  return <div className="sc-message--emoji">{props.data.emoji}
    { props.timestamp && <div className="sc-message--timestamp">{moment(props.timestamp).fromNow()}</div> }
  </div>
}

export default EmojiMessage
