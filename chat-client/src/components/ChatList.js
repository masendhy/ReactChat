import React from 'react';
import ChatItem from './ChatItem';
import ChatForm from './ChatForm';

export default class ChatList extends React.Component {
    render() {
      const dataList = this.props.data.map((item,index) =>{
        return (
          <ChatItem item={item} deleteChat={this.props.remove}/>
        );
      })
      return (
        <div className="timeline-centered">
          {dataList}
          <ChatForm addChat={this.props.add}/>
       
        

          </div> 
      );
    }
  }