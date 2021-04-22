var likeSymbol = document.querySelector("#like");

var likeNumber = 0;

likeSymbol.addEventListener("click",clickEventHandler);

function clickEventHandler(){

    if(likeNumber<100){
    likeNumber=likeNumber+1;
    document.querySelector("#like-no").innerHTML=likeNumber;
    }

    else{
        alert("Maximum likes has been reached!");
    }

}