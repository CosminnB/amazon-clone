import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-7a06b.cloudfunctions.net/api",
  //http://localhost:5001/clone-7a06b/us-central1/api
});

export default instance;
