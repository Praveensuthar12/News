import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const News = () => {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=29071c1d634c42ceaa4eba3c3ec49ef9`

        fetch(url)
            .then(response => response.json())
            .then(data => setArticle(data.articles)) // <-- 'articles' not 'article'
            .catch(error => console.error("Error fetching news:", error));
    }, []);

    return (
        <>
            <h2 className="text-center">
                Latest <span className="badge bg-danger my-3">News</span>
            </h2>

            {article.map((news, index) => (
                <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                />
            ))}
        </>
    )
}

export default News
