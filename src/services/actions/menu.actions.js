import { ApiGet, ApiPost } from "../../middleware/httpClient";
import * as _ from "../../utils/actionTypes";
import menudummy from "../menu-dummy";

const getAllMenuAndCategory = () => (dispatch) => {
  dispatch({
    type: _.GET_MENU_AND_CATEGORY_LOAD,
    loading: true,
  });
  dispatch({
    type: _.GET_MENU_AND_CATEGORY_SUCCESS,
    loading: false,
    payload: menudummy,
  });
  // ApiGet("data-product-and-category")
  //   .then((res) => {
  //     dispatch({
  //       type: _.GET_MENU_AND_CATEGORY_SUCCESS,
  //       loading: false,
  //       payload: res?.data,
  //     });
  //   })
  //   .catch((err) => {
  //     dispatch({
  //       type: _.GET_MENU_AND_CATEGORY_FAILED,
  //       loading: false,
  //     });
  //   });
};
const getCategoryAndMenu = () => (dispatch) => {
  dispatch({
    type: _.GET_CATEGORY_AND_MENU_LOAD,
    loading: true,
  });
        dispatch({
        type: _.GET_CATEGORY_AND_MENU_SUCCESS,
        loading: false,
        payload: menudummy,
      });
  // ApiGet("category-and-product")
  //   .then((res) => {
  //     dispatch({
  //       type: _.GET_CATEGORY_AND_MENU_SUCCESS,
  //       loading: false,
  //       payload: res?.data,
  //     });
  //   })
  //   .catch((err) => {
  //     dispatch({
  //       type: _.GET_CATEGORY_AND_MENU_FAILED,
  //       loading: false,
  //     });
  //   });
};

const getMenuById = (id) => (dispatch) => {
  dispatch({
    type: _.GET_MENU_BYID_LOAD,
    loading: true,
  });
  ApiGet(`data-product/${id}`)
    .then((res) => {
      dispatch({
        type: _.GET_MENU_BYID_SUCCESS,
        loading: false,
      });
    })
    .catch((err) => {
      dispatch({
        type: _.GET_MENU_BYID_FAILED,
        loading: false,
      });
    });
};

const onOrderMenu = (data) => (dispatch) => {
  dispatch({
    type: _.CREATE_ORDER_LOAD,
    loading: true,
  });
  ApiPost(`add-trx`, data)
    .then((res) => {
      dispatch({
        type: _.CREATE_ORDER_SUCCESS,
        loading: false,
      });
    })
    .catch((err) => {
      dispatch({
        type: _.CREATE_ORDER_FAILED,
        loading: false,
      });
    });
};

const menuInTrolly = (data) => (dispatch) => {
  dispatch({
    type: _.ADD_MENU_TROLLY || _.EDIT_MENU_TROLLY || _.REMOVE_MENU_TROLLY,
    loading: true,
  });
  setTimeout(() => {
    dispatch({
      type: _.ADD_MENU_TROLLY || _.EDIT_MENU_TROLLY || _.REMOVE_MENU_TROLLY,
      loading: false,
      payload: data,
    });
  }, 2000);
};

export {
  getAllMenuAndCategory,
  getCategoryAndMenu,
  getMenuById,
  onOrderMenu,
  menuInTrolly,
};
