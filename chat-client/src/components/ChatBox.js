 import React from 'react';
 import ChatList from './ChatList';
 import '../chat.css';

export default class ChatBox extends React.Component {
  constructor(props){
    super(props);
    this.state={chatdata:[]};

    this.addChat = this.addChat.bind(this);
    this.deleteChat = this.deleteChat.bind(this);
  }
  addChat(item){
    item.id = Date.now();
    this.setState((prevState,props)=>({
      chatdata:[...prevState.chatdata,item]
    }));
  }
  deleteChat(id){
    this.setState((prevState,props)=>({
      chatdata:prevState.chatdata.filter(item => item.id != id)
    }));
  }
    render() {
      return (
        <div className="container">
	        <div className="row">
          <ChatList data={this.state.chatdata} add={this.addChat} remove={this.deleteChat}/>
	          </div>
          </div>
      );
    }
  }