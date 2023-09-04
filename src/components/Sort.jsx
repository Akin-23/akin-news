import React, { useState } from "react";
import ArticlesList from "./ArticlesList";

const Sort = () => {
  const [newSortBy, setSortBy] = useState("created_at");
  const [newOrder, setOrder] = useState("desc");


  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }
  function handleOrderChange(event) {
    setOrder(event.target.value);
  }

  return (
    <section>
      <h2>Sort By</h2>
      <section>
        <fieldset>
          <label htmlFor="created_at">
            <input
              id="created_at"
              type="radio"
              name="sort-by"
              value="created_at"
              defaultChecked
              onClick={handleSortByChange}
            />{" "}
            Date{" "}
          </label>
          <label htmlFor="votes">
            <input
              id="votes"
              type="radio"
              name="sort-by"
              value="votes"
              onClick={handleSortByChange}
            />{" "}
            Votes{" "}
          </label>
          <label htmlFor="comment_count">
            <input
              id="comment_count"
              type="radio"
              name="sort-by"
              value="comment_count"
              onClick={handleSortByChange}
            />{" "}
            Comments{" "}
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="asc">
            <input
              id="asc"
              type="radio"
              name="order"
              value="asc"
              onClick={handleOrderChange}
            />{" "}
            Ascending{" "}
          </label>
          <label htmlFor="desc">
            <input
              id="desc"
              type="radio"
              name="order"
              value="desc"
              defaultChecked
              onClick={handleOrderChange}
            />{" "}
            Descending{" "}
          </label>
        </fieldset>
      </section>

      <section>
        <ArticlesList newSortBy={newSortBy} newOrder={newOrder} />
      </section>
    </section>
  );
};

export default Sort;
