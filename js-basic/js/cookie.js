const getCookie = (name) => {
  const cookies = document.cookie.split(';');
  for (let ix = 0; ix < cookies.length; ix++) {
    const [cookieName, value] = cookies[ix].trim().split('=');
    if (cookieName === name) {
      return decodeURIComponent(value);
    }
  }
  return '';
}

document.getElementById('output').textContent = 'name=' + getCookie('name') + 'age=' + getCookie('age');
document.cookie = 'name=' + encodeURIComponent('侍太郎') + '; max-age=60 * 60';
document,cookie = 'age=30; max-age=60 * 60';