import React from 'react';

function ChatItem (props) {
    return (
        <article className="timeline-entry">

        <div className="timeline-entry-inner">

            <div className="timeline-icon bg-success">
            <i className="entypo-feather"></i><a href="#" onClick={(event) =>{props.deleteChat(props.item.id); event.preventDefault();} }>x</a>
            </div>
            <div className="timeline-label">
                <h2><a href="#">{props.item.name}</a> <span></span></h2>
                <p>{props.item.message}</p>
            </div>
        </div>
    </article>
    );
}

export default ChatItem;