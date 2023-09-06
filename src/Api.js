import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://akinapplication.onrender.com/api",
});

export const fetchArticles = (newSortBy, newOrder) => {
  return newsApi
    .get(`/articles?sort_by=${newSortBy}&order=${newOrder}`)
    .then(({ data }) => {
      const { articles } = data;
      return articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchArticlesByTopic = (topic) => {
  return newsApi
    .get(`/articles?topic=${topic}`)
    .then(({ data }) => {
      const { articles } = data;
      return articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTopics = () => {
  return newsApi
    .get("/topics")
    .then(({ data }) => {
      const { topics } = data;
      return topics;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUsers = () => {
  return newsApi
    .get("/users")
    .then(({ data }) => {
      const { users } = data;
      return users;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticle = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      const { article } = data;
      return article;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getComments = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      const { comments } = data;
      return comments;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postComment = (commentBody, article_id) => {
  console.log(article_id);
  console.log(commentBody);
  return newsApi
    .post(`/articles/${article_id}/comments`, commentBody)
    .then(({ data }) => {
      console.log(data);

      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
