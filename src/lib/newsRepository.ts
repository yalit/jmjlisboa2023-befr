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

export function findOne(newsId: number = null): Promise<News> {
    return new Promise((res, rej) => {
        if (newsId === null) {
            rej("NewsId can't be null");
        }

        getDataFromApi('news', {id: newsId.toString()})
            .then(response => {
                extractOneNewsFromAPI(response).then(res)
            })
            .catch(rej)
    })
}

export function findAllPresentations(): Promise<Array<News>> {
    return new Promise((res, rej) => {
        getDataFromApi('news', {tags: '2175'}) // TODO : get correct "presentationNews" tag id from C4Y
            .then(response => {
                Promise.all(extractNewsFromAPI(response))
                  .then(res)
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
        .catch(rej)
    });
}
