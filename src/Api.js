import axios from "axios";

export const fetchArticles = (newSortBy,newOrder) => {
    return axios
      .get(
        `https://akinapplication.onrender.com/api/articles?sort_by=${newSortBy}&order=${newOrder}`
      )
      .then(({ data }) => {
        const { articles } = data;
        return articles;
      })
      .catch((err) => {
        console.log(err);
      });
}

export const fetchArticlesByTopic = (topic) => {
  return axios
    .get(
      `https://akinapplication.onrender.com/api/articles?topic=${topic}`
    )
    .then(({ data }) => {
      const { articles } = data;
      return articles;
    })
    .catch((err) => {
      console.log(err);
    });
};
  
export const getTopics = () => {
  return axios
    .get(
      `https://akinapplication.onrender.com/api/topics`
    )
    .then(({ data }) => {
      const { topics } = data;
      return topics;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUsers = () => {
  return axios
    .get("https://akinapplication.onrender.com/api/users")
    .then(({ data }) => {
      const { users } = data;
      return users;
    })
    .catch((err) => {
      console.log(err);
  })
}
