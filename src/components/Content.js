import { ContentBox, Count, Btn, Title } from 'components/Content.styled';
import { useEffect, useState } from 'react';

const bgBtnTrue = {
  bgcolor: '#5CD3A8',
  '&:hover': { backgroundColor: '#8CE0C2' },
};
const bgBtnFalse = {
  bgcolor: '#EBD8FF',
  '&:hover': { backgroundColor: '#C3C4C8' },
};

export const Content = ({ user, changeFolowing, isFollowing }) => {
  const [check, setCheck] = useState(isFollowing);

  const [followersCount, setFollowersCount] = useState(user.followers);

  const onFollow = () => {
    setCheck(prev => !prev);
    if (!check) {
      setFollowersCount(prev => (prev += 1));
    } else {
      setFollowersCount(prev => (prev -= 1));
    }
  };
  useEffect(() => {
    changeFolowing(user.id, check, followersCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check]);

  const splitedFollowerCount = count => {
    const countArr = count.toString().split('');
    const newCountArr = [];
    countArr.reverse().forEach((item, index) => {
      newCountArr.unshift(item);
      if ((index + 1) % 3 === 0 && index + 1 !== countArr.length) {
        newCountArr.unshift(',');
      }
    });
    return newCountArr.join('');
  };

  return (
    <ContentBox>
      <Title sx={{ mb: '26px' }}> {user.user} </Title>
      <Count sx={{ mb: '12px' }}> {user.tweets} tweets </Count>
      <Count sx={{ mb: '26px' }}>
        {' '}
        {splitedFollowerCount(followersCount)} Followers{' '}
      </Count>
      <Btn
        sx={check ? bgBtnTrue : bgBtnFalse}
        variant="contained"
        onClick={onFollow}
      >
        {!check ? 'Follow' : 'Following'}
      </Btn>
    </ContentBox>
  );
};
