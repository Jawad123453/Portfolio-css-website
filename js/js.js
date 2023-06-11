let fbtn=document.querySelector(".forml");
let sbtn=document.querySelector(".x");
let mainul=document.querySelector("#main-ul")

fbtn.addEventListener("click",function(){
  mainul.style.display="flex";
})
sbtn.addEventListener("click",function(){
  mainul.style.display="none";
})

// end of part 1

let choose=document.querySelectorAll(".about-choose ul li");
let number1=document.querySelector(".about-choose-part1");
let number2=document.querySelector(".about-choose-part2");
let number3=document.querySelector(".about-choose-part3");

if(choose[0].classList.contains("active")){
  number1.style.display="block";
}
else{
  number1.style.display="none";
}
if(choose[1].classList.contains("active")){
  number2.style.display="block";
}
else{
  number2.style.display="none";
}
if(choose[2].classList.contains("active")){
  number3.style.display="block";
}
else{
  number3.style.display="none";
}

choose.forEach(function(e){
  e.addEventListener("click",function(){
    choose.forEach(function(e){
      e.classList.remove("active")
    })
    this.classList.add("active");

    if(choose[0].classList.contains("active")){
      number1.style.display="block";
    }
    else{
      number1.style.display="none";
    }
    if(choose[1].classList.contains("active")){
      number2.style.display="block";
    }
    else{
      number2.style.display="none";
    }
    if(choose[2].classList.contains("active")){
      number3.style.display="block";
    }
    else{
      number3.style.display="none";
    }
  })
})
// end of part 2