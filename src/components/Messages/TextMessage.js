import React, { Component } from 'react';
import moment from 'moment';
import chatIconUrl from './../../assets/chat-icon.svg';

const TextMessage = (props) => {
  return (
    <div className="sc-message--text">{props.data.text}
      { props.timestamp && <div className="sc-message--timestamp">{moment(props.timestamp).fromNow()}</div> }
    </div>
  )
}

export default TextMessage
