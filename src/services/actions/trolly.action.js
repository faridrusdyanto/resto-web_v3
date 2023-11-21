import * as _ from "../../utils/actionTypes";

const getListTrolly = (data) => (dispatch) => {
  dispatch({
    type: _.LISTTROLLY,
    loading: true,
  });
  setTimeout(() => {
    dispatch({
      type: _.LISTTROLLY,
      loading: false,
      payload: data,
    });
  }, 2000);
};

const addEditDelTrolly = (product, type) => (dispatch) => {
  const datas = {
    product: [...product],
    customer: {
      name: "",
      table: "",
      numberofCustomer: 5,
    },
  };
  dispatch({
    type: _.ADD_MENU_TROLLY,
    loading: true,
  });
  setTimeout(() => {
    dispatch({
      type: _.ADD_MENU_TROLLY,
      loading: false,
      payload: datas,
    });
  }, 2000);
};

const increamentdecreamentTrolly = (product, isPlus) => async (dispatch) => {
  const datas = {
    product: [...product],
    customer: {
      name: "",
      table: "",
      numberofCustomer: 5,
    },
  };
  return await dispatch({
    type: isPlus ? _.INCREAMENT : _.DECREAMENT,
    loading: false,
    payload: datas,
  });
};

export { getListTrolly, addEditDelTrolly, increamentdecreamentTrolly };
