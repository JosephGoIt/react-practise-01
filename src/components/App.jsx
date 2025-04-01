import { Profile } from "./Profile/Profile";
import user from "../json/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../json/data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "../json/friends.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
