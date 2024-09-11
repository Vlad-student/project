import Article from "./Article.mjs";
import { mult } from "./math.mjs";

console.log('hi form node');

const number1 =2;
const number2= 8;
console.log(number1+number2);

console.log(mult(4,9));

  
const newArticle = new Article('Content for article')
console.log(newArticle.render());
