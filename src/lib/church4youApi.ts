const church4youBaseUrl = 'https://church4you.be/wp-json/wp/v2/';

export function getDataFromApi(endpoint: string, params: {[k: string]: string}): Promise<any> {
    const url = buildEndpoint(endpoint, params);
    console.log("Fecthing data from : ", url);
    return fetch(url, {
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            console.log("Answer received correctly from : ", url)
            return response.json()
        } else {
            console.log('Error in response from : ', url)
            console.log(response)
            throw new Error(response.statusText)
        }
    })
}

function buildEndpoint(endpoint: string, params: {[k: string]: string}): string {
    let builtEndpoint = church4youBaseUrl + endpoint;

    const paramKeys = Object.keys(params)
    if ('id' in params) {
        return builtEndpoint += '/'+params.id
    }

    if (paramKeys.length > 0) {
        builtEndpoint += '?'
    }
    builtEndpoint +=  paramKeys.map(k => `${k}=${params[k]}`).join('&')

    return builtEndpoint;
}