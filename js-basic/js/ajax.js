const url1 = 'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';
const url2 = 'https://jsonplaceholder.typicode.com/posts';
const button1 = document.getElementById('ajax-weather-btn');
const button2 = document.getElementById('ajax-dummy-btn');

//
button1.addEventListener('click', () => {
  fetch(url1)
    .then((response) => response.json())
    .then((data) => {
      const weather = data[0].timeSeries[0].areas[0].weathers[1];
      const result = document.getElementById('result1');
      result.textContent = '東京の明日の天気：' + weather;
    });
});

//
button2.addEventListener('click', () => {
  const dummyData = {name:'侍太郎', age:30};
  const params = {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(dummyData),
  };

  fetch(url2, params)
    .then((response) => response.json())
    .then((data) => {
      const result = document.getElementById('result2');
      result.innerHTML = '<pre>サーバーからの応答：\n' + JSON.stringify(data, null, 2) + '</pre>';
    })
});