export type articleData = {
    id: number,
    sku: string,
    last_price: number,
}

export type Article = {
    data: articleData[],
}