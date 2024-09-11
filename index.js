console.log('hi form node');

const number1 =2;
const number2= 8;
console.log(number1+number2);

const mult = (n1,n2)=>n1*n2;
console.log(mult(4,9));

class Article{
    constructor(content){
        this.content = content;
    }
    render(){
        return this.content;
    }
}  
const newArticle = new Article('Content for article')
console.log(newArticle.render());
