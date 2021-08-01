import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});

export default API