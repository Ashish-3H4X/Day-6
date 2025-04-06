 function tocelsius(fahrenheit){
return (5/9)*(fahrenheit-32);
 }
  let value = tocelsius(77);
   document.getElementById('demo1').innerHTML=` 
function tocelsius(fahrenheit){ <br>
return (5/9)*(fahrenheit-32);<br>
 }<br>
  let value = tocelsius(77); <br>
   Result :
   ${value}
  `