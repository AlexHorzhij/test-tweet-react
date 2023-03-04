import { fetchUsers } from '../service/api';
import { Tweeet } from './Tweet';
import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

export const UserList = () => {
  const [usersData, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || []
  );
  const [follow, setFollow] = useState(
    JSON.parse(localStorage.getItem('followers')) || []
  );

  const fetchData = async () => {
    const users = await fetchUsers();
    if (usersData.length === 0) {
      setUsers(users);
      localStorage.setItem('users', JSON.stringify(users || []));
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setUserToLocalStorage = (id, followersCount) => {
    const users = JSON.parse(localStorage.getItem('users'));
    const index = users?.findIndex(item => item.id === id);
    users[index].followers = followersCount;
    localStorage.setItem('users', JSON.stringify(users));
  };

  const changeFolowing = (id, check, followersCount) => {
    if (check) {
      setFollow(prev => [...prev, id]);
    } else {
      const newArr = follow.filter(item => item !== id);
      setFollow(newArr);
    }
    setUserToLocalStorage(id, followersCount);
  };
  useEffect(() => {
    localStorage.setItem('followers', JSON.stringify(follow));
  }, [follow]);

  const users = JSON.parse(localStorage.getItem('users')) || usersData;

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
