import cowsay from 'cowsay';
import Article from "./Article.mjs";
import { mult } from "./math.mjs";

console.log(cowsay.say({text:'qwerrty'}));


console.log('hi form node');

const number1 =2;
const number2= 8;
console.log(number1+number2);

console.log(mult(4,9));

  
const newArticle = new Article('Content for article')
console.log(newArticle.render());
