document.write("<table border = '1'>");
let flag = false;

for(let i = 0; i < 11; i++){
    document.write("<tr>");



    for(let j = 0; j < 11; j++){

     if((i==0)||(j==0)){
        document.write("<td>" + (i + j) +  "</td>");
     }

     else{
        
        if((i%2)&&(j%2)) {
            document.write("<td style='background: red;'>" + i*j + "</td>");
           
        }

        else if(!(i%2)&& !(j%2)) {
            document.write("<td style='background: red;'>" + i*j + "</td>");
        }
       
        else {
        document.write("<td style='background: yellow;'>" + i*j + "</td>");
      }
    }
}
    document.write("</tr>");
}

document.write("</table>");
