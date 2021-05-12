//CHESSBOARD

/*

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #  
  
*/


let n=8;
let string="";
for(i=1;i<=n;i++)
{
    for(j=1;j<=n;j++){

        if(i%2!=0){
            if(j%2==0){
                string+="#";
        
            }
            else{
                string+=" ";
            }
        }    
           
        else
        {
            if(i%2==0)
            {
                if(j%2==0){
                string+=" ";
                }
                else{
                    string+="#";
                }
            }    
            
            
        
        }
       
        
        }
        string+="\n";
        }
        

    
    console.log(string);