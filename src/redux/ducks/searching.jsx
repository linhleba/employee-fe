export const SET_SEARCHING = 'ADMIN_PANEL/settings/SET_searching';

const initialState = {
  content: '',
  keyword: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCHING:

    default:
      return state;
  }
};

// export const setSearching = ();
