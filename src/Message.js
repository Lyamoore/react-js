import './Message.css';

function Message(props) {
    return (
      <span className="Message">
          {props.text}
      </span>
    );
  }

  export default Message;