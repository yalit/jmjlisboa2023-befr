import { getDataFromApi } from "./church4youApi"
import { getMedia, type Media } from "./mediaRepository"

export interface News {
    id: number,
    title: string,
    url: string,
    img: Media
}

export function findLastNews(nbNews: number = null): Promise<Array<News>> {
    return new Promise((res, rej) => {
        getDataFromApi('news', {tags: '2175'})
            .then(response => {
                Promise.all(extractNewsFromAPI(response))
                  .then(allNews =>{
                      if (nbNews === null) {
                          res(allNews)
                      } else {
                          res(allNews.slice(0, nbNews))
                      }
                  })
                  .catch(rej)
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