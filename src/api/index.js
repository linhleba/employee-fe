import apiCaller from '../utils/apiCaller';

export const getEmployee = async () => {
  let data = [];
  await apiCaller('api/employee', 'get').then((res) => {
    data = res.data;
  });
  return data;
};
