import React, { useState } from "react";
import ArticlesList from "./ArticlesList";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const Sort = () => {
  const [newSortBy, setSortBy] = useState("created_at");
  const [newOrder, setOrder] = useState("desc");
  const [isOpen, setIsOpen] = useState(false);

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }
  function handleOrder(ord) {
      setOrder(ord);
  }


  return (
    <section className="sortsection">
      <h2 >Sort By</h2>
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
            Comment Count{" "}
          </label>
        </fieldset>
        <br/>
        <div className="order-btn-container">
          <button className="order-btn" onClick={() => setIsOpen((prev) => !prev)}>
            {newOrder === "desc" ? (
              <p className={newOrder === "desc" ? "active-button" : ""}>
                Descending
              </p>
            ) : (
              <p className={newOrder === "asc" ? "active-button" : ""}>
                Ascending
              </p>
            )}
            {!isOpen ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )}
            {isOpen && (
              <div>
                <li
                  id="asc"
                  onClick={() => handleOrder("asc")}
                  className={newOrder === "asc" ? "active-button" : ""}
                >
                  Ascending
                </li>
                <li
                  id="desc"
                  onClick={() => handleOrder("desc")}
                  className={newOrder === "desc" ? "active-button" : ""}
                >
                  Descending
                </li>
              </div>
            )}
          </button>
        </div>
      </section>
      <section>
        <br/>
        <ArticlesList newSortBy={newSortBy} newOrder={newOrder} />
      </section>
    </section>
  );
};

export default Sort;
