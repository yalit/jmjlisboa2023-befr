import { getDataFromApi } from "./church4youApi"
import { getMedia, type Media } from "./mediaRepository"

export interface News {
    id: number,
    title: string,
    url: string,
    img: Media
}

export function findLastNews(): Promise<Array<News>> {
    return new Promise((res, rej) => {
        getDataFromApi('news', {tags: '2175'})
            .then(response => {
                res(Promise.all(extractNewsFromAPI(response)))
            })
            .catch(rej)
    })
} 

function extractNewsFromAPI(data: []): Promise<News>[] {
    return data.map((d: any): Promise<News> => {
        return extractOneNewsFromAPI(d);
    })
}

function extractOneNewsFromAPI(news: any): Promise<News> {
    return new Promise((res, rej) => {
        getMedia(news.featured_media)
        .then((media: Media) => {
            res({
                id: news.id,
                title: news.title.rendered,
                url: news.link,
                img: media
            })
        })
        .catch(res)
    });
}