// const token_name = "token";
const token_name = "id";
export default {
  setToken: token => {
    window.localStorage[token_name] = token;
  },
  getToken: () => window.localStorage[token_name]
};
