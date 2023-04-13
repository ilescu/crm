import React from 'react';

const Article = ({article}) => {

    return (
        <li className="border-b-2 border-gray-200">
            <h2 className="text-2xl font-bold">{article.sku}</h2>
            <p className="text-red-800">{article.last_price}</p>
        </li>
    )
}

export default Article;