class News {
    constructor(){
        this.APIkey = '7d9797f8f3ab4a2eb3891eac46192d8b'
    }

    // send url to the API
    async queryAPI(newsName, country, category){
        // Build URL
        let url = 'https://newsapi.org/v2/'

        // check the country and category value
        if (country === '' && category === '') {
            url += 'everything?'
        } else {
            url += 'top-headlines?'
        }

        // if newsName exist
        if (newsName !=='') {
            url += `q=${newsName}&`
        }

        // if country exist
        if (country !=='') {
            url += `country=${country}&`
        }

        // if category exist 
        if (category !== '') {
            url += `category=${category}&`
        }

        // complete url with key
        url += `apiKey=${this.APIkey}`

        
        const newsResponse = await fetch(url)
        const news = await newsResponse.json()
        return {
            news
        }
    }
}