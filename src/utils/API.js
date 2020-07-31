import axios from "axios";

export default {
  getNewDog: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
};
