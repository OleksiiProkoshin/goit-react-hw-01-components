import { FriendsList } from './friends/FriendList';
import { Profile } from './profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './Transaction/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json'
import transactions from '../transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
