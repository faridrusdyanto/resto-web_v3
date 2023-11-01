import * as _ from "../../utils/actionTypes";

const initialState = {
  loading: false,
  menuCategories: [],
  categoriesmenu: [],
  menuitem: {},
  orderstatus: null,
  trollyItems: [],
  messagestatus: null,
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

    case _.CREATE_ORDER_LOAD:
      return { ...state, loading: true };
    case _.CREATE_ORDER_SUCCESS:
      return { ...state, loading: false, orderstatus: actions.payload };
    case _.CREATE_ORDER_FAILED:
      return { ...state, loading: false };

    case _.ADD_MENU_TROLLY:
      return { ...state, trollyItems: actions.payload };
    case _.EDIT_MENU_TROLLY:
      return { ...state, loading: false, trollyItems: actions.payload };
    case _.REMOVE_MENU_TROLLY:
      return { ...state, trollyItems: actions.payload };

    default:
      return state;
  }
};

export default menuReducers;
