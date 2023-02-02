import PropTypes from 'prop-types';
import {
  UserProfile,
  UserDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStatsList,
  UserStatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <UserDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserStatsList>
        <UserStatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </UserStatsItem>
      </UserStatsList>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
