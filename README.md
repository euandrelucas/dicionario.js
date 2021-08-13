## DICIONARIO.JS
- Um package para obter significados de palavras da lingua portuguesa de maneira simples e facil.

> [Servidor de Suporte](https://discord.gg/2pFH6Yy)

## Significado:

```js
const diciojs = require('dicionario.js')
// Tem que ser uma função assicrona, pois dependendo pode retornar undefined.
async function getWord() {
    const word = await diciojs.significado('planeta')

    return console.log(word)
}
getWord()
```

## Retorna:

```js
{
  class: 'substantivo masculino',
  meanings: [
    'Astro sem luz própria que está em órbita girando ao redor de uma estrela e absorvendo sua lua; o planeta terra gira em torno do Sol: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno são planetas do Sistema Solar.',
    '[Por Extensão] Designação da Terra, do planeta em que vive o homem.'
  ],
  etymology: 'Etimologia (origem da palavra planeta). A palavra planeta deriva do grego "planétes", pelo latim planeta, ae, com o sentido de "que anda sem destino ou vagabundo".'
}
```

## Wikipedia:

```js
const diciojs = require('dicionario.js')

async function getWord() {
    const word = await diciojs.wikipedia('planeta')

    return console.log(word)
}

getWord()
```

## Retorna:

```js
{
  type: 'standard',
  title: 'Planeta',
  displaytitle: 'Planeta',
  namespace: { id: 0, text: '' },
  wikibase_item: 'Q634',
  titles: { canonical: 'Planeta', normalized: 'Planeta', display: 'Planeta' },
  pageid: 1410,
  thumbnail: {
    source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/1e7m_comparison_Uranus_Neptune_Sirius_B_Earth_Venus.png/320px-1e7m_comparison_Uranus_Neptune_Sirius_B_Earth_Venus.png',
    width: 320,
    height: 256
  },
  originalimage: {
    source: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/1e7m_comparison_Uranus_Neptune_Sirius_B_Earth_Venus.png',
    width: 1280,
    height: 1024
  },
  lang: 'pt',
  dir: 'ltr',
  revision: '61607628',
  tid: '2f4a4e30-fb01-11eb-b36a-0526d9b5e6a2',
  timestamp: '2021-07-13T20:29:47Z',
  description: 'corpo celeste sem processo interno de fusão nuclear que orbita sistemas estelares',
  description_source: 'central',
  content_urls: {
    desktop: {
      page: 'https://pt.wikipedia.org/wiki/Planeta',
      revisions: 'https://pt.wikipedia.org/wiki/Planeta?action=history',
      edit: 'https://pt.wikipedia.org/wiki/Planeta?action=edit',
      talk: 'https://pt.wikipedia.org/wiki/Discuss%C3%A3o:Planeta'
    },
    mobile: {
      page: 'https://pt.m.wikipedia.org/wiki/Planeta',
      revisions: 'https://pt.m.wikipedia.org/wiki/Special:History/Planeta',
      edit: 'https://pt.m.wikipedia.org/wiki/Planeta?action=edit',
      talk: 'https://pt.m.wikipedia.org/wiki/Discuss%C3%A3o:Planeta'
    }
  },
  extract: 'Um planeta é um corpo celeste que orbita uma estrela ou um remanescente de estrela, com massa suficiente para se tornar esférico pela sua própria gravidade, mas não ao ponto de causar fusão termonuclear, e que tenha limpado de planetesimais a sua região vizinha. O termo planeta é antigo, com ligações com a história, astrologia, ciência, mitologia e religião. Os planetas eram vistos por muitas culturas antigas como divinos ou emissários de deuses. À medida que o conhecimento científico evoluiu, a percepção humana sobre os planetas mudou, incorporando diversos tipos de objetos. Em 2006, a União Astronômica Internacional (UAI) adotou oficialmente uma resolução definindo planetas dentro do Sistema Solar, a qual tem sido elogiada e criticada, permanecendo em discussão entre alguns cientistas.',
  extract_html: '<p>Um <b>planeta</b> é um corpo celeste que orbita uma estrela ou um remanescente de estrela, com massa suficiente para se tornar esférico pela sua própria gravidade, mas não ao ponto de causar fusão termonuclear, e que tenha limpado de planetesimais a sua região vizinha. O termo <i>planeta</i> é antigo, com ligações com a história, astrologia, ciência, mitologia e religião. Os planetas eram vistos por muitas culturas antigas como divinos ou emissários de deuses. À medida que o conhecimento científico evoluiu, a percepção humana sobre os planetas mudou, incorporando diversos tipos de objetos. Em 2006, a União Astronômica Internacional (UAI) adotou oficialmente uma resolução definindo planetas dentro do Sistema Solar, a qual tem sido elogiada e criticada, permanecendo em discussão entre alguns cientistas.</p>'
}
```

## Piada:

```js
const diciojs = require('dicionario.js')

const word = diciojs.piada()
return console.log(word)

getWord()
```

## Retorna:

```js
{
  type: 'Feature',
  properties: {
    pergunta: 'Qual é a coisa mais dura quando se está aprendendo a andar de bicicleta?',
    resposta: 'O chão!',
    createdAt: '2017/09/02 06:07:15.659',
    updatedAt: '2017/09/02 06:07:15.659'
  },
  geometry: null
}
```