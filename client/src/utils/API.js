import axios from "axios";

// The getArticles method retrieves articless from the server
// It accepts a "query" or term to search the article api for
const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const KEY = "ab0835bc085746bf9b7d768dc46d342d";


export default {
  getData(search) {
    return axios.get(`${URL}?q=${search}&api-key=${KEY}`);
  },
  getSavedArticles() {
    return axios.get("/api/articles");
  },
  saveArticles(Article) {
    return axios.post("api/articles", Article)
  },
  deleteArticle(id) {
    return axios.delete("api/articles/" + id);
  }
};
