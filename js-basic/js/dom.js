console.log(document.head);
console.log(document.body);
console.log(window);

console.log(document.getElementById('first-list'));
console.log(document.getElementsByClassName('heading'));

const headings = document.getElementsByClassName('heading');
for (let ix = 0; ix < headings.length; ix++) {
  console.log(headings[ix]);
}

console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

const cssHeadings = document.querySelectorAll('.heading');
const cssLists = document.querySelectorAll('li');
for (let ix = 0; ix < cssHeadings.length; ix++) {
  console.log(cssHeadings[ix]);
}
for (let ix = 0; ix < cssLists.length; ix++) {
  console.log(cssLists[ix]);
}

const li = document.createElement('li');
li.textContent = 'JavaScriptで新しく作成したリスト３';
// li.innerHTML = '<a href="#">JavaScriptで新しく作成したリスト３</a>';
document.querySelector('ul').appendChild(li);