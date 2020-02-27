import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8080/api"
});

export default class CookBookService {
  getRecipes() {
    return axios.get("/recipes");
  }
  postNewRecipes(recipes) {
    return axios.post("/recipes", { recipes });
  }
  updateRecipes(recipe, id) {
    return axios.put(`/recipes/${id}`, recipe);
  }
  getPreviousRecipes(id) {
    return axios.get(`/recipes/previous/${id}`);
  }
}
