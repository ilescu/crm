import React from 'react';
import {ArticleService} from "@/modules/articles/services/ArticleService"
import {articleData} from "@/modules/articles/model/Article"
import {perPage} from "@/config"
import Article from "@/modules/articles/view/Article";

const Articles = () => {

    const [page, setPage] = React.useState(1)

    const {data: articles, isLoading} = ArticleService.useGetArticlesQuery({ page, perPage })

    const handleNextPage = () => {
        setPage(page + 1)
    }

    const handlePrevPage = () => {
        if (page === 1) return;
        setPage(page - 1)
    }

    return (
        <>
         <h1 className="text-center text-red-500">Articles Page!</h1>
            {isLoading && <h2>Loading...</h2>}
            {articles && (
                <>
                    <ul className="mt-5">
                        {
                            articles.data.map((article: articleData) => <Article key={article.id} article={article} />)
                        }
                    </ul>
                    <div>
                        <button type="button" onClick={handlePrevPage}>Prev</button>
                        <span className="ml-5 text-red-500">{page}</span>
                        <button className="ml-5" type="button" onClick={handleNextPage}>Next</button>
                    </div>
                </>
            )}
        </>
    )
}

export default Articles;