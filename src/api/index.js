import apiCaller from '../utils/apiCaller';

export const getEmployee = async () => {
  let data = [];
  await apiCaller('api/employee', 'get').then((res) => {
    data = res.data;
  });
  return data;
};
export const deleteEmpoyee = async (payload) => {
  let status;
  await apiCaller(`api/employee/delete/${payload}`, 'delete').then((res) => {
    status = res.status;
  });
  return status;
};
