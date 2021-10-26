import React from 'react'
import Article from '../Article'
import MarketInfoSkeleton from '../skeleton-components/MarketInfoSkeleton'

const Articles = ({articleList}) => {
    if(articleList.length > 0){
        return (
            <>
                <div className = "mt-80 h-full ">
                    <h1 className = "text-gray-800 dark:text-white dark:border-gray-300 font-bold text-xl inline border-b-2 border-gray-800">Stories </h1>
                </div>
                {articleList.map((article) => {
                    return <Article 
                    title = {article.title} 
                    link = {article.link}
                    summary = {article.summary}
                    author = {article.author}
                    image = {article.main_image}
                    />
                })}
            </>
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
