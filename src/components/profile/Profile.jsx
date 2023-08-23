
import { DescriptionWrapper, StatsList, StatsListItem } from "./Profile.styled"
import {generateRandomColor} from "../Statistics/Statistics"

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <DescriptionWrapper className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">
          <b>{username}</b></p>
        <p className="tag">
          <b>@{tag}</b></p>
        <p className="location">
          <b>{location}</b></p>
      </DescriptionWrapper>

      <StatsList className="stats">
        <StatsListItem style={{ backgroundColor: generateRandomColor() }}>
          <span className="label">Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </StatsListItem>
        <StatsListItem style={{ backgroundColor: generateRandomColor() }}>
          <span className="label">Views</span>
          <span className="quantity"> {stats.views}</span>
        </StatsListItem>
        <StatsListItem style={{ backgroundColor: generateRandomColor() }}>
          <span className="label">Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </StatsListItem>
      </StatsList>
    </div>
  );
};


