currentTime()
var date = new Date(); 

Date()
var hh = date.getHours();
var  mm = date.getMinutes();
var ss = date.getSeconds();
var session = "AM"; 
if(hh ===0) {hh = 12;}
if(hh>12){hh = hh - 12; session = 'PM'} 
