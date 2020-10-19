import axios from "axios";

const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');
  return axios.create({
    baseURL: "<waiting for base url from Jenn",
    headers: {
    Authorization: token
    }  
  })
}

export default axiosWithAuth;