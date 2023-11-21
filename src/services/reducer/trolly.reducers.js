import * as _ from "../../utils/actionTypes";

const initialState = {
  loading: false,
  trollyItems: {},
  messagestatus: null,
};

const trollyReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case _.CREATE_ORDER_LOAD:
      return { ...state, loading: true };
    case _.CREATE_ORDER_SUCCESS:
      return { ...state, loading: false };
    case _.CREATE_ORDER_FAILED:
      return { ...state, loading: false };

    case _.ADD_MENU_TROLLY:
      return {
        ...state,
        loading: actions.loading,
        trollyItems: actions.payload,
      };
    case _.EDIT_MENU_TROLLY:
      return {
        ...state,
        loading: actions.loading,
        trollyItems: actions.payload,
      };
    case _.REMOVE_MENU_TROLLY:
      return {
        ...state,
        loading: actions.loading,
        trollyItems: actions.payload,
      };

    case _.INCREAMENT:
      return { ...state, trollyItems: actions.payload };
    case _.DECREAMENT:
      return { ...state, trollyItems: actions.payload };

    default:
      return state;
  }
};

export default trollyReducers;
