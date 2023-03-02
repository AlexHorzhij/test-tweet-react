import { Card, BgContainer } from './Tweet.styled';
import { Avatar } from './Avatar';

export const Tweeet = () => {
  return (
    <Card>
      {/* <BgContainer /> */}
      <BgContainer src={'../assets/images/bg.png'} />
      <Avatar />
    </Card>
  );
};
