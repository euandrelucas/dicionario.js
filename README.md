## DICIONARIO.JS
- Um package para obter significados de palavras da lingua portuguesa de maneira simples e facil.
## Exemplos:
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