//Здание 1
const files = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js']

const filterFiles = (arr) => {
  const str = arr.join(' ');
  const RegfilterArray = /\S+(jsx|js|ts)/g;
  const match = str.match(RegfilterArray);

  return match;
}

console.log(filterFiles(files));

//Здание 2
const str = `info@methed.ru, max24@mail.com, java_script@google.io Примеры не валидные: my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz`;
const regEmail = /\w+@([a-z]{3,})\.([a-z]{2,5})/g;
console.log(str.match(regEmail));

//Здание 3
const str3 = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.'
const regStr = /\(.+?\)/g;
console.log(str3.match(regStr));

//Здание 4
const strHttps = `http://site.ru`;
const replaseHttp = (str) => {
  const replace = /(http)(\:\/\/\w+\.)+(\S+)/g;
  return str.replace(replace, '$1s$2com');
};
console.log(replaseHttp(strHttps));