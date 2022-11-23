import PropTypes from 'prop-types';
import user from '../../data/user.json';
import {
  NameUser,
  ProfileCard,
  ProfileDescription,
  ProfileImg,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar }) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileImg src={avatar} alt="User avatar" width={'150px'} />
        <NameUser>{username}</NameUser>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDescription>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{user.stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{user.stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{user.stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
