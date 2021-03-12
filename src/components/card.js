import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardMain = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthor = document.createElement('div');
  const cardImgContainer = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardBy = document.createElement('span');

  cardMain.appendChild(cardHeadline);
  cardMain.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImgContainer);
  cardAuthor.appendChild(cardBy);
  cardImgContainer.appendChild(cardImg);

  cardMain.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthor.classList.add('author');
  cardImgContainer.classList.add('img-container');

  cardHeadline.textContent = article.headline;
  cardImg.src = article.authorPhoto;
  cardBy.textContent = `By ${article.authorName}`;

  cardMain.addEventListener('click', event => {
    console.log(article.headline);
  });

  return cardMain;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const attachPoint = document.querySelector(selector);
  
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then(res => {
      res.data.articles.bootstrap.forEach(obj =>{
        let cardResult = Card(obj);
        attachPoint.appendChild(cardResult);
      });
      res.data.articles.javascript.forEach(obj =>{
        let cardResult = Card(obj);
        attachPoint.appendChild(cardResult);
      });
      res.data.articles.jquery.forEach(obj =>{
        let cardResult = Card(obj);
        attachPoint.appendChild(cardResult);
      });
      res.data.articles.node.forEach(obj =>{
        let cardResult = Card(obj);
        attachPoint.appendChild(cardResult);
      });
      res.data.articles.technology.forEach(obj =>{
        let cardResult = Card(obj);
        attachPoint.appendChild(cardResult);
      });
    })
    .catch(err => {
      debugger;
    })
    .finally(() => {
      // console.log('Done!');
    });
}

export { Card, cardAppender }
