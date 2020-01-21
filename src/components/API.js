const baseUrl = "http://localhost:3000";
const signInUrl = baseUrl + "/login";
const validateUrl = baseUrl + "/validate";
const articlesURL = "http://localhost:3000/articles";

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }).then(res => res.json());

const post = (url, data) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

const signIn = (email, password) => post(signInUrl, { email, password });

const validate = () => get(validateUrl);

const getSavedArticles = () => get(articlesURL);

export default {
  signIn,
  post,
  get,
  validate,
  getSavedArticles
};
