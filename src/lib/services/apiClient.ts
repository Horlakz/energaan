import { PUBLIC_API_URL } from "$env/static/public";
import axios from "axios";

export const client = axios.create({});

client.defaults.baseURL = PUBLIC_API_URL;
client.defaults.xsrfHeaderName = "X-CSRFToken";
client.defaults.responseEncoding = "utf8";
client.defaults.headers["common"]["Content-Type"] = "application/json";
client.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
client.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403 || error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
