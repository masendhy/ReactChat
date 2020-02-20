import React from 'react';

export default class ChatForm extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {name: '',message:''};
  
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeMessage = this.handleChangeMessage.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeMessage(event) {
      this.setState({message: event.target.value});
    }
  
    handleSubmit(event) {
      this.props.addChat(this.state)
      this.setState({name:'',message:''});
      event.preventDefault();
    }

    render() {
      return (
        <article classNameName="timeline-entry begin">
              <div className="timeline-entry-inner">
                <div className="timeline-icon" />
                    <i className="entypo-flight"></i> 
                </div>
                <div className="timeline-label">
                  <form className="form-horizontal " onSubmit={this.handleSubmit}>
                    <div className="form-group" >
                      <label htmlFor="name" className="col-sm-2 control-label">Nama</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" placeholder="nama kamu" value={this.state.name} onChange={this.handleChangeName}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="col-sm-2 control-label">Pesan</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="message" placeholder="pesan kamu" value={this.state.message} onChange={this.handleChangeMessage}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Kirim</button>
                      </div>
                    </div>
                  </form>
              </div>
        </article>
      );
    }
  }