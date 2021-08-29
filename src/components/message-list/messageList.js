import "./messageList.css";
import Icons from "../icons";

export const MessageList = ({ list }) => {
  return (
    <div className="message-list">
      {list.map((message) => {
        return (
          <div className="message" key={message.id}>
            <Icons 
            name='message-avatar'
            color='#000'
            size='20'
            className='message-avatar'
            />
            &nbsp;
            {message.author}: {message.text}
          </div>
        );
      })}
    </div>
  );
};