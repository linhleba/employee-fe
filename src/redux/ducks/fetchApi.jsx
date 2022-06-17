export const FETCH_EMPLOYEE_API = 'ADMIN_PANEL/settings/FE';
// import * as api from '../../api/index';

const initialState = {
  fetchEmployee: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_API:
      //   const reponseData = api.getEmployee();
      return {
        ...state,
        fetchEmployee: state.fetchEmployee + 1,
      };

    default:
      return state;
  }
};

export const fetchApi = () => ({
  type: FETCH_EMPLOYEE_API,
});
