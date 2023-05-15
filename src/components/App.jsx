import { UserCard } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


import userData from "../user.json";
import statsData from "../data.json";
import friendsData from "../friends.json";
import itemsData from "../transactions.json";

export const App = () => {
  return (
    <div>
      <UserCard
      username={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
    />
    <Statistics stats={statsData} title="Upload stats"/>
    <FriendList friends={friendsData} />
    <TransactionHistory items={itemsData} /> 
    </div>
  );
};
