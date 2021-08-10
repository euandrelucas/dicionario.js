const axios = require('axios')

class DicioJS {
    async significado(word) {
        try {
            return await axios.get(`https://significado.herokuapp.com/meanings/${encodeURI(word)}`).then(response => {
                return response.data[0]
            })
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new DicioJS()