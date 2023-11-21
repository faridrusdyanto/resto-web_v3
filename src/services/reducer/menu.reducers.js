import * as _ from "../../utils/actionTypes";

const initialState = {
  loading: false,
  menuCategories: [],
  categoriesmenu: [],
  menuitem: {},
};

const menuReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case _.GET_MENU_AND_CATEGORY_LOAD:
      return { ...state, loading: true };
    case _.GET_MENU_AND_CATEGORY_SUCCESS:
      return { ...state, loading: false, menuCategories: actions.payload };
    case _.GET_MENU_AND_CATEGORY_FAILED:
      return { ...state, loading: false };

    case _.GET_CATEGORY_AND_MENU_LOAD:
      return { ...state, loading: true };
    case _.GET_CATEGORY_AND_MENU_SUCCESS:
      return { ...state, loading: false, categoriesmenu: actions.payload };
    case _.GET_CATEGORY_AND_MENU_FAILED:
      return { ...state, loading: false };

    case _.GET_MENU_BYID_LOAD:
      return { ...state, loading: true };
    case _.GET_MENU_BYID_SUCCESS:
      return { ...state, loading: false, menuitem: actions.payload };
    case _.GET_MENU_BYID_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default menuReducers;
