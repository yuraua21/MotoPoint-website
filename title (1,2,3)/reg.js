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
        e.preventDefault;
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
          p.preventDefault;
           });
       }
       }
       function popupClose(winpopup) {
         winpopup.classList.remove("open");
        }

     
       
 let signinbtn = document.querySelector(".signin-btn");
 let signupbtn = document.querySelector(".signup-btn");
 let blockbox = document.querySelector(".popup_block");
 //let popupblock = document.querySelector(".popup_block");



 signinbtn.addEventListener("click" , function(){
    blockbox.classList.add("active");
    //popupblock.classList.add("active");
  
});

 
 signupbtn.addEventListener("click" , function(){
    blockbox.classList.remove("active");
    //popupblock.classList.remove("active");
   
 });




let specbut = document.querySelector(".specialqnibut");
let inputName = document.querySelector("#logpup");
let inputPass = document.querySelector("#puppass");




specbut.addEventListener("click" , function(){
       
       localStorage.setItem( "Логін" , inputName.value);
       localStorage.setItem("Пароль" , inputPass.value);
       
 });

 
 let vhidpop = document.querySelector("#logvhidpop");
 let passpoplog = document.querySelector("#passvhidpop");
 let vhidinputbut = document.querySelector(".uniquclassbut");
 let inpfrom = document.querySelector(".popup");
 

vhidinputbut.addEventListener("click" ,  function(){
      if("Логін" , vhidpop.value = "Логін" , inputName.value){
         if("Пароль" , passpoplog.value = "Пароль" , inputPass.value){
           
            inpfrom.classList.remove("open");
         }
      }
});


