import { Card, BgContainer, Line, Logo } from './Tweet.styled';
import { Avatar } from './Avatar';
import { Content } from './Content';
import bg from 'assets/images/bg.png';
import logo from 'assets/images/logo.png';

export const Tweeet = ({ user, changeFolowing, isFollowing }) => {
  return (
    <Card>
      <Logo image={logo} />
      <BgContainer image={bg} />
      <Avatar foto={user.avatar} />
      <Line />
      <Content
        user={user}
        changeFolowing={changeFolowing}
        isFollowing={isFollowing}
      />
    </Card>
  );
};
