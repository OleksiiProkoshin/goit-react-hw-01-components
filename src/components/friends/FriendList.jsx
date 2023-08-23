import {FriendListItem} from './FriendListItem'
import {List} from './FriendsList.styled'

export const FriendsList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </List>
  );
};
