import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Box } from './Box';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      as="main"
    >
      <Box my="4" as="section">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Box>
      <Statistics title="Upload stats" />
      <Box Box my="4" as="section">
        <FriendList friends={friends} />
      </Box>
        <TransactionHistory items={transactions} />
    </Box>
  );
};
