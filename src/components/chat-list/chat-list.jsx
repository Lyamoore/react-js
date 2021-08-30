import { List, ListItem, ListItemText } from "@material-ui/core";
import "./chat-list.css";

export const ChatList = ({ list }) => {

    return (
        <List 
        className="chat-list"
        component="nav"
        >
          {list.map((chat) => {
            return (
              <ListItem
                key={chat.id + 1}
                className="chat"
                button
                alignItems = "flex-start"
              >
                <ListItemText 
                primary={chat.author}
                />
              </ListItem>
            );
          })}
        </List>
      );
}