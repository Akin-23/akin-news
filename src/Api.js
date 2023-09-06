import axios from "axios";
import { comment } from "postcss";
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
      throw new Error(err.message);
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
      throw new Error(err.message);
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
      throw new Error(err.message);
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
      throw new Error(err.message);
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
      throw new Error(err.message);
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
      throw new Error(err.message);
    });
};

export const postComment = (commentBody, article_id) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, commentBody)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const updateVote = (article_id, vote) => {
  const newVote = {
    inc_votes: vote,
  };

  return newsApi
    .patch(`/articles/${article_id}`, newVote)
    .then(({ data }) => {
      const { article } = data;
      console.log(article.votes);
      return article.votes;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const deleteComment = (comment_id) => {
  return newsApi
    .delete(`/comments/${comment_id}`)
    .then(() => {
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

