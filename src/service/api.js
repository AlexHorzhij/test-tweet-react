import axios from 'axios';
const BASE_URL = 'https://63ff70bf9f844910297e76b8.mockapi.io/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchUsers = async () => {
  try {
    const users = await instance('tweets', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    return users.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateFollowersCount = async (id, followersCount) => {
  const body = { followers: 45 };
  try {
    const { data } = await instance(`tweets/${id}/`, body, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    console.log('user', data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
