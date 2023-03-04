import { fetchUsers } from '../service/api';
import { Tweeet } from './Tweet';
import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { updateFollowersCount } from '../service/api';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [follow, setFollow] = useState(
    JSON.parse(localStorage.getItem('followers'))
  );

  const fetchData = async () => {
    const users = await fetchUsers();
    setUsers(users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeFolowing = (id, check, followersCount) => {
    updateFollowersCount(id, followersCount);
    if (check) {
      setFollow(prev => [...prev, id]);
    } else {
      const newArr = follow.filter(item => item !== id);
      setFollow(newArr);
    }
  };
  useEffect(() => {
    localStorage.setItem('followers', JSON.stringify(follow));
  }, [follow]);

  return (
    <Container component="main">
      {users.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={2}>
          {users.map(user => {
            const isFollowing =
              follow.findIndex(item => item === user.id) === -1 ? false : true;
            return (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={user.id}>
                <Tweeet
                  user={user}
                  changeFolowing={changeFolowing}
                  isFollowing={isFollowing}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};
