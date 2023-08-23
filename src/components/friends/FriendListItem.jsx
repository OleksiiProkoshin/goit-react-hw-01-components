import { ListItem, ListImg } from "./FriendsList.styled";

export const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <ListItem className="item" isOnline={isOnline}>
      <span> {isOnline ? "✅ i'm online" : "❌ i'm not online"}</span>
      <ListImg className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">
        <b>{name}</b>
        </p>
    </ListItem>
  );
};

