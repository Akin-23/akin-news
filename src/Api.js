import axios from "axios";

export const fetcharticles = (newSortBy,newOrder) => {
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
