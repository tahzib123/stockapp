import React from 'react'
import Article from '../Article'
import MarketInfoSkeleton from '../skeleton-components/MarketInfoSkeleton'

const Articles = ({articleList}) => {
    if(articleList.length > 0){
        return (
            articleList.map((article) => {
                console.log(article.main_image);
                return <Article 
                title = {article.title} 
                link = {article.link}
                summary = {article.summary}
                author = {article.author}
                image = {article.main_image}
                />
            })
        )  
    }else {
        return (
                <>
                    <MarketInfoSkeleton />
                    <MarketInfoSkeleton />
                    <MarketInfoSkeleton />
                    <MarketInfoSkeleton />
                    <MarketInfoSkeleton />
                </>
            )
    }
}

export default Articles;
