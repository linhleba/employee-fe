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

export const getEmployeeById = async (id) => {
  let data = [];
  await apiCaller(`api/employee/${id}`, 'get').then((res) => {
    data = res.data;
  });
  return data;
};

export const getTeam = async () => {
  let data;
  await apiCaller('api/team', 'get').then((res) => {
    data = res.data;
    // console.log('res data is', data);
  });
  return data;
};

export const createEmployee = async (payload) => {
  console.log('payload is', payload);
  const data = {
    ...payload,
    team: {
      id: payload.team_id,
    },
  };
  let message;
  await apiCaller('api/employee', 'post', data).then((res) => {
    console.log('res create is', res);
    message = res.status;
  });
  return message;
};

export const getWorking = async (id) => {
  let data = [];
  await apiCaller(`api/working/${id}`, 'get').then((res) => {
    data = res.data;
  });
  return data;
};

export const getAdvance = async (id) => {
  let data = [];
  await apiCaller(`api/advance/${id}`, 'get').then((res) => {
    data = res.data;
  });
  return data;
};
