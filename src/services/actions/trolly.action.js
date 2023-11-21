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

const addEditDelTrolly = (dataObj, type) => (dispatch) => {
  let product = [];
  product.push(dataObj);
  const datas = {
    product: [],
    customer: {
      name: "",
      table: "",
      numberofCustomer: 5,
    },
  };
  datas.product = product;
  dispatch({
    type: _.ADD_MENU_TROLLY,
    loading: true,
  });
  setTimeout(() => {
    dispatch({
      type: _.ADD_MENU_TROLLY, //|| _.EDIT_MENU_TROLLY || _.REMOVE_MENU_TROLLY,
      loading: false,
      payload: datas,
    });
  }, 2000);
};

const increamentdecreamentTrolly = (data, type) => async (dispatch) => {
  return await dispatch({
    type: type === "plus" ? _.INCREAMENT : _.DECREAMENT,
    loading: false,
    payload: data,
  });
};

export { getListTrolly, addEditDelTrolly, increamentdecreamentTrolly };
