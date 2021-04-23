

var clickBtn = document.getElementById("bt");

var op = document.getElementById("#op");

function findLeapYr(yr){
    var yr = document.getElementById("ip").value;
    if((yr%4)==0 || (yr%400)==0 && (yr%100)!=0){
       // console.log("Leap");
       alert("You were born in leap year");
      
    }
    else{
           // console.log("not leap");
           alert("You were not born in leap year");
          
        }
    }
