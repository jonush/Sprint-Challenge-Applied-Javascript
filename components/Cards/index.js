// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function make(element) {
    return document.createElement(element);
}

function get(selector) {
    return document.querySelector(selector);
}

const cardContainer = get('.cards-container');

function articleMaker({ headline, authorPhoto, authorName }) {
    const card = make('div');
    const title = make('div');
    const author = make('div');
    const imgContainer = make('div');
    const img = make('img');
    const name = make('span');

    card.setAttribute('class', 'card');
    title.setAttribute('class', 'headline');
    author.setAttribute('class', 'author');
    imgContainer.setAttribute('class', 'img-container');
    title.textContent = headline;
    img.src = authorPhoto;
    name.textContent = `By: ${authorName}`;

    card.appendChild(title);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(name);

    return card;
}

fetch('https://lambda-times-backend.herokuapp.com/articles')
    .then (response => response.json())
    .then (
        data => {
            console.log(data.articles);
            data.articles.javascript.forEach(article => {
                cardContainer.appendChild(articleMaker(article));
            });
            data.articles.bootstrap.forEach(article => {
                cardContainer.appendChild(articleMaker(article));
            });
            data.articles.technology.forEach(article => {
                cardContainer.appendChild(articleMaker(article));
            });
            data.articles.jquery.forEach(article => {
                cardContainer.appendChild(articleMaker(article));
            });
            data.articles.node.forEach(article => {
                cardContainer.appendChild(articleMaker(article));
            });
        }
    )
    .catch (
        error => {
            alert(`The articles could not be retrieved.`)
        }
    )