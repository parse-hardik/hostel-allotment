import axios from "axios";

// console.log("IN API");

export default axios.create({
  responseType: "json"
});