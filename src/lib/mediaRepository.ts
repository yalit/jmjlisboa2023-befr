import { getDataFromApi } from "./church4youApi"

export interface Media {
    src: string,
    title: string
}
export function getMedia(id: number): Promise<Media> {
    return new Promise((res, rej) => {
        getDataFromApi('media', {id: id.toString()})
        .then(response => res(extractMediaFromAPI(response)))
        .catch(rej)
    })
}

function extractMediaFromAPI(d: any): Media {
    return {
        src: d.guid.rendered,
        title: d.title.rendered
    }
}