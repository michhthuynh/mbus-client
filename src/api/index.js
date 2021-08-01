import axios from "axios";

const API = axios.create({
  baseURL: "http://13.57.247.71:5000/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});

export default API