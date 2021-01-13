//part 1 for THIS keyword
console.log(this);//will print empty braces({})which indicates empty scope(this is the output we get in node engine which supports v8 engine)
//this varies when we ru the same code in browser console..which will return global context(window).
var name="rags";
function sayName(){
    console.log(this);
}
sayName();