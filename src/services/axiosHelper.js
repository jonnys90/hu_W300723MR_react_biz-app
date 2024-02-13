import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3030/api";
// axios.defaults.baseURL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    /**
     * if token exists then we add the token to request header
     */
    config.headers["x-auth-token"] = token;
  }
  return config;
});
