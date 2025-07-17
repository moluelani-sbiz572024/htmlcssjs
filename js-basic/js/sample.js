'use strict';

const result = document.getElementById('result');
const btn = {
  test1: document.getElementById('test1'),
  test2: document.getElementById('test2'),
  test3: document.getElementById('test3'),
  test4: document.getElementById('test4'),
  test5: document.getElementById('test5'),
};

btn.test1.addEventListener('click', (evt) => {
  // result.textContent = 
  //   evt.target.innerText + 'をクリックしましたね！';
  sayHello(evt.target.innerText);
});

btn.test2.addEventListener('click', function(evt) {
  result.textContent = JSON.stringify(evt, null);
  console.log(evt);
});

btn.test3.addEventListener('click', function(evt) {
  Sample.say(evt.target.innerText + 'ようこそ！');
  console.log('Sample: %s', JSON.stringify(Sample));
});

btn.test4.addEventListener('click', function(evt) {
  Sample.add(10, 25);
});

btn.test5.addEventListener('click', function(evt) {
  Sample.doColor('crimson');
});

// ======================================================

function sayHello(name) {
  result.textContent = name + ' Hello !';
}

const Sample = {
  name: 'Sample',
  say: function(text) {
    result.textContent = text;
  },
  add: (a, b) => {
    result.textContent = `加算： ${a} + ${b} = ` + (a + b);
  },
  doColor(color) {
    result.textContent = 'この文字列の色を変更します。';
    result.style.color = color;
  }
}
