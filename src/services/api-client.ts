import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f1c1b13f7d714d8db48c6e15ccccd998",
  },
});
