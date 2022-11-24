import { AppContainer } from './App.styled';

import Profile from './Profile/Profile';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import data from '../data/data.json';
import FriendsList from './FriendList/FriendList';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <AppContainer>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    </AppContainer>
  );
};
