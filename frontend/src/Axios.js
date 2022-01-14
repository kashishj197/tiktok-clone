import axios from "axios";

const baseURL = "https://tiktok-clone-197.herokuapp.com/v1";
const instance = axios.create({ baseURL });

export default instance;
