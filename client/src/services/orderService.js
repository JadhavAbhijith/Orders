import axios from "axios";

export const saveOrder = (data) =>
  axios.post("http://localhost:5000/api/orders", data);
