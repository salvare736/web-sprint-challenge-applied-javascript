const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerMain = document.createElement('div');
  const headerDate = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const headerTemp = document.createElement('span');

  headerMain.appendChild(headerDate);
  headerMain.appendChild(headerTitle);
  headerMain.appendChild(headerTemp);

  headerMain.classList.add('header');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');

  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;

  return headerMain;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const attachPoint = document.querySelector(selector);
  const headerResult = Header('Lambda Times', 'JANUARY 6, 2021', '26°');
  attachPoint.appendChild(headerResult);
}

export { Header, headerAppender }