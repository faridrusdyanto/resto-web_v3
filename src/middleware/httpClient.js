import axios from "axios";

axios.defaults.baseURL = "https://api.example.com";

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    config.headers = {};
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    response.headers = {};

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const ApiGet = async (url, body) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, body)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

const ApiPost = async (url, body) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, body)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

const ApiDelete = async (url, body) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, body)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export { ApiGet, ApiPost, ApiDelete };
