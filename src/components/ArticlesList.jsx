import React from 'react'
import { fetchArticles } from '../Api';
import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

const ArticlesList = ({ newSortBy, newOrder }) => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);



    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        fetchArticles(newSortBy, newOrder).then((data) => {
        setIsLoading(false);
        setArticles(data);
      }).catch((err) => {
        setIsLoading(false);
        setIsLoading(true);          
      })
    }, [newSortBy, newOrder]);

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something has gone wrong!</p>;


    return <main>
        <ul className='article-list'> 
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}  />;
            })}
        </ul>
        
    </main>;
};

export default ArticlesList