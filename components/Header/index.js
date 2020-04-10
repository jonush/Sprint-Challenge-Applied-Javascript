// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function make(element) {
    return document.createElement(element);
}

function get(selector) {
    return document.querySelector(selector);
}

const headerContainer = get('.header-container');

function Header(year, degrees) {
    const header = make('div');
    const date = make('span');
    const title = make('h1');
    const temp = make('span');
    
    header.setAttribute('class', 'header');
    date.setAttribute('class', 'date');
    date.textContent = `SMARCH 28, ${year}`
    title.textContent = 'Lambda Times';
    temp.setAttribute('class', 'temp');
    temp.textContent = `${degrees}°`;

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return header;
}

headerContainer.appendChild(Header(2019, 98));
