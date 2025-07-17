var result = document.getElementById('result');

const outputBtn = document.getElementById('output-btn');
outputBtn.addEventListener('click', () => {
  const res = '【clickイベント】：クリックされました！';
  console.log(res);
  // result.textContent = res;
  result.innerHTML = '<span style="color:crimson">' + res + '</span>';
  console.log(result);
});

const addBtn = document.getElementById('add-btn');
const parentList = document.getElementById('parent-list');
addBtn.addEventListener('click', () => {
  const childList = document.createElement('li');
  childList.textContent = 'これはリスト要素です';
  parentList.appendChild(childList);
});

const countBtn = document.getElementById('count-btn');
countBtn.addEventListener('click', () => {
  const text = document.forms.textForm.textBox.value;
  const res = '【文字列のカウント】' + text.length + '文字';
  console.log(res);
  result.textContent = res;
});

const areaBtn = document.getElementById('area-btn');
areaBtn.addEventListener('click', () => {
  const area = document.forms.areaForm.area.value;
  const res = '【選択オプション】' + area;
  console.log(res);
  result.textContent = res;
});

const osBtn = document.getElementById('os-btn');
osBtn.addEventListener('click', () => {
  const items = document.forms.osForm.os;
  const res = ['<p>【選択結果】：</p>'];
  for (let ix = 0; ix < items.length; ix++) {
    if (items[ix].checked) {
      console.log(items[ix].value);
      res.push(items[ix].value + '<br>');    
    }
  }
  result.innerHTML = res.join('');
});