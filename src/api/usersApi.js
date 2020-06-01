import instance from './index';

const usersApi = {
  getUsers: () => instance.get('/users'),
};

export default usersApi;
