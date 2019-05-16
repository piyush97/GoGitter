import axios from "axios";
var id = "MY_CLIENT_ID";
var sec = "MY_SECRET_ID";
var params = "?client_id" + id + "&client_secret=" + sec;

function getProfile(username) {
  return axios
    .get("https://api.github.com/users/" + username + params)
    .then(function(user) {
      return user.data;
    });
}

function getRepos(username) {
  return axios.get(
    "https://api.github.com/users/" +
      username +
      "/repos" +
      params +
      "&per_page=100"
  );
}

function getStarCount(repos) {
  return repos.data.reduce(function(count, repo) {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore(profile, repos) {
  var followers = profile.followers;
  var totalStars = getStarCount(repos);
  return followers * 3 + totalStars;
}

function handleError(error) {
  console.warn(error);
  return null;
}

export default {
  battle: players => {},

  fetchPopularRepos: function(language) {
    var encodedURI = window.encodeURI(
      "https://api.github.com/search/repositories?q=stars:>1+language:" +
        language +
        "&sort=starts&order=desc&type=Repositories"
    );
    return axios.get(encodedURI).then(function(response) {
      return response.data.items;
    });
  }
};
