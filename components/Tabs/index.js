// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function make(element) {
    return document.createElement(element);
}

function get(selector) {
    return document.querySelector(selector);
}

const lsTopics = get('.topics');

function tabMaker({ topic }) {
    const tab = make('div');
    tab.setAttribute('class', 'tab');
    tab.textContent = topic;

    return tab;
}


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(
    response => {
        const data = response.data.topics;
        console.log(data);
        data.forEach(topic => {
            const topicTitle = tabMaker({ topic });
            lsTopics.appendChild(topicTitle);
        })
    }
)
.catch (
    error => {
        alert(`The topic was not found. Please try again.`);
    }
)