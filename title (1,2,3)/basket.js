let popuplink = document.querySelectorAll(".popup_link");
let body = document.querySelector("body");
let popup = document.querySelector("popup");







if (popuplink.length > 0 ) {
       for(let i = 0; i < popuplink.length; i+=1){
       popupLINK = popuplink[i];
     popupLINK.addEventListener ("click", function(e) {
           let popupname = document.getElementsByClassName("popup_link")
           let curentpopup = document.getElementById("popup");
           
           popupOpen(curentpopup);
          
         });
       }
       }
       function popupOpen(curentpopup){
          curentpopup.classList.add("open");
       }
       
 




let popclose = document.querySelectorAll(".close-popup");
if (popclose.length > 0) {
  for (let i = 0; i < popclose.length; i+=1){
    let funpop = popclose[i];
    funpop.addEventListener("click" , function (p){
      popupClose(funpop.closest(".popup"));
      
       });
  }
}
function popupClose(funpop) {
  funpop.classList.remove("open");
}

let poptext = document.querySelectorAll(".but");
if (poptext.length > 0) {
  for (let i = 0; i <poptext.length; i+=1){
    let text = poptext[i];
    text.addEventListener("click" , function (i){
      popupClose(text.closest(".popup"));
      i.preventDefault;
       });
  }
}






//масив наших товарів 
//
      //goals
//збільшення к-сті товару 
//зменшення к-сті товару 
//видалення товару
//вивід корзини

        



