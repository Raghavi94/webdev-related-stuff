//Create three elements and fetch one using tag name and console it 

var ele=document.getElementsByTagName('h1');//here by fetching the html element by tag name they are fetched as Array.
console.log(ele[0].innerText);

//Fetch another one using class name and console it

var a=document.getElementsByClassName('clsn');//here class thing fecthed as an array.
console.log(a[0].innerHTML);

//Change the content of the element fetched via class name

a[0].innerHTML="People";
console.log(a[0].innerHTML);

//And fetch last one using id name and console it

var b = document.getElementById('idn');//here since id name is unique for each element in HTML ..As per that rule..the element is fetched as such ..not as an array.Since it is fetched as a single element we need not use indexing here to call individual element.
console.log(b);

b.innerText="LetsUpgrade";
console.log(b);