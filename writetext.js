var loichuc = [
				"Chúc mừng năm mới",
				"Vạn Sự Như Ý",
				"Tỷ Sự Như Mơ",
				"Triệu Triệu Bất Ngờ",
				"Ngập Tràn Hạnh Phúc"
			];


var i = 0;
var speed = 100;
var count0 = loichuc[0].length;
var count1 = loichuc[1].length;
var count2 = loichuc[2].length;
var count3 = loichuc[3].length;
var count4 = loichuc[4].length;

function typeWriter() {
  if (i < count0) {
    document.getElementById("text1").innerHTML += loichuc[0].charAt(i);
    i++;
  	setTimeout(typeWriter, speed);  
  	
  }
  else if(i >= count0 && i<(count0 + count1)){
  	 document.getElementById("text2").innerHTML += loichuc[1].charAt(i-count0);
    i++;
    setTimeout(typeWriter, speed);  
    
  }
  else if(i >= (count1+count0) && i<(count0 + count1 + count2)){
  	
     document.getElementById("text3").innerHTML += loichuc[2].charAt(i-count0-count1);
    i++;
    setTimeout(typeWriter, speed);  
  }
  else if(i >= (count0 + count1 + count2) && i<(count0 + count1 + count2+ count3)){
  	
     document.getElementById("text4").innerHTML += loichuc[3].charAt(i-count0-count1-count2);
    i++;
    setTimeout(typeWriter, speed);  
  }
  else if(i >= (count0 + count1 + count2+ count3) && i<(count0 + count1 + count2+ count3 + count4)){
  	
     document.getElementById("text5").innerHTML += loichuc[4].charAt(i-count0-count1-count2-count3);
    i++;
    setTimeout(typeWriter, speed);  
  }
  else{
  	const audio = new Audio("https://x2convert.com/Thankyou?token=U2FsdGVkX18mGcKN3olUoFbscVJNGVXoSBtdVdQ0LxzMs6R8jk3SFFx9qzoa20tZxbrINULIVWrF6Kz7RMhevPHt5eTseFtzvmmEnK9Pt7%2fNpZi%2b8VWEE4rCAAX1QSm8S6XHyKsn0WT0Ewg5kHvvgY0R%2bwuKOkbSZQILXhi5SFE%3d&s=youtube&id=&h=2950493950567860328");
  	audio.play();
  }
  console.log("1");

}
typeWriter();