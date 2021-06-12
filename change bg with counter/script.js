var countElement = document.getElementById("countdown");

var whiteColor="#66ccff"
var gradientOne="#ffccff";

//console.log(countElement.innerHTML);

var initialCountVal = countElement.innerHTML;

setInterval(function(){
        
    initialCountVal = (initialCountVal>0) ?  initialCountVal-1 : 0
        
    countElement.innerHTML = initialCountVal;

   document.body.style.background = (initialCountVal%2==0) ? gradientOne : whiteColor;

},1000);


