import axios from 'axios';
import jokes from './jokes.json';

class Dicionario {
    
    async meaning(word: string) {
        return await axios.get(`https://significado.herokuapp.com/meanings/${encodeURI(word)}`).then(response => response.data[0]);
    }
    
    async wikipedia(word: string) {
        return axios.get(`https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURI(word)}`, {
            'httpsAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36'
        }).then(response => response.data);
    }
    
    joke() {
        return jokes.features[~~(Math.random() * jokes.features.length)];
    }
    
}

export default new Dicionario();
