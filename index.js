const { get } = require('axios')
const jokes = require('./jokes.json')

class DicioJS {
    async significado(word) {
        return await get(`https://significado.herokuapp.com/meanings/${encodeURI(word)}`).then(response => {
            return response.data[0]
        })
    }

    async wikipedia(word) {
        return get(`https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURI(word)}`, {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36'
        }).then(response => {
            return response.data
        })
    }

    piada() {
        const rand = Math.floor(Math.random() * jokes.features.length)
        const piada = jokes.features[rand]
        return piada
    }
}

module.exports = new DicioJS()