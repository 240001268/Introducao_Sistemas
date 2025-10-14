// Ficheiro onde inserimos o comportamento

console.log(document);

// Highlight de todas as palavras com + de 8 letras

const paragraph = document.querySelector('p');
/*paragraph.innerHTML = paragraph.innerText.split(' ')
   .map(word => word.length > 8 ? `<span style="background-color: yellow;">${word}</span>` : word)
    .join(' ').split('.')
    .map(sentence => `<p>${sentence}</p>`)
    .join('');

// Adicionar um link para o Google no final do parágrafo

const link = document.createElement('a');
link.href = 'https://www.google.com';
link.innerText = 'Google URL';
document.body.appendChild(link);
*/

// Contar nº de palavras do parágrafo
const wordCounter = paragraph.innerText.split(' ').length; // Contar nº de palavras
const countDisplay = document.createElement('div'); // Criar um elemento div
countDisplay.innerText = `${wordCounter} words`; // Inserir o texto
document.body.insertBefore(countDisplay, paragraph); // Inserir antes do parágrafo
        