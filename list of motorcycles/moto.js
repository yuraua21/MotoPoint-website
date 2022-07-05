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
    



function popupClose(winpopup) {
 winpopup.classList.remove("open");
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

// let poptext = document.querySelectorAll(".but");
// if (poptext.length > 0) {
// for (let i = 0; i <poptext.length; i+=1){
//  let text = poptext[i];
//  text.addEventListener("click" , function (i){
//    popupClose(text.closest(".popup"));
//    i.preventDefault;
//     });
// }
// }





let glosepopup = document.querySelector(".popuplink_a");
let foipopup = document.querySelector(".popup");
let aserpopup = document.querySelector(".popup_a");
let funclose = document.querySelector(".close-popup_a");


glosepopup.addEventListener("click" , function(){
  aserpopup.classList.add("open");
    
    

})

foipopup.addEventListener("click" , function(){
  foipopup.classList.remove("open");
})


funclose.addEventListener("click" , function(){
    aserpopup.classList.remove("open");
})











// let funpope = document.querySelectorAll(".popup_link_a");
// let funpop_b = document.getElementById("a_popup");
//let okpopup = document.querySelector(".popup");
// let obob = document.querySelector(".popup.open");
// let youb = document.querySelector("popup_a");

//.popup_a
//.popup
//popup_link_a
// let funpopb = document.querySelector(".popup_a");
// let retpop = document.querySelector(".popup");
// let linkpopfun = document.querySelector("popuplink_a");


//   //for (let i = 0; i < linkpopfun.length; i+=1 );
//  // let openlinkpop = linkpopfun[i];
//       linkpopfun.addEventListener("click") ,  function(o){
//       let fuhopenju = document.querySelector("popuplink_a"); 
//       let opennamepop = document.querySelector(".popup_a");
//       let popnamefunopen = document.querySelector(".popup");

//       popupgtOpen(popnamefunopen);
//       o.preventDefault();
//   }
//   //}


// function popupgtOpen(popnamefunopen){
//       popnamefunopen.classList.add("opena");
//       opennamepop.classList.add("open");
// }








// funpope.addEventListener("click" , function(){
//         funpope.classList.add("open");
//         //youb.classList.add("open");
//  });

//  obob.addEventListener("click" , function(){
//         obob.classList.remove("open");
//  });


// if (funpop_a.length > 0 ) {
//   for(let i = 0; i < funpop_a.length; i+=1){
//      popupvid = funpop_a[i];
//      popupvid.addEventListener ("click", function(e) {
//       let popupit = document.getElementsByClassName("popup_link_a")
//       let wipopup = document.getElementById("popup_a");
      
//       popupOpenb(wipopup);
//       e.preventDefault;
//     });
//   }
//   }
//   function popupOpenb(wipopup){
//       wipopup.classList.add("open");
//   }
  


   
  //  let  popup_close_a = document.querySelectorAll(".popup_close_a");
  //  if (popup_close_a.length > 0) {
  //  for (let i = 0; i < popup_close_a.length; i+=1){
  //   let zakpop = popup_close_a[i];
  //   zakpop.addEventListener("click" , function (p){
  //     popupClose_a(zakpop.closest(".popup"));
  //     p.preventDefault;
  //      });
  //  }
  //  }

  //  function popupClose_a(zakpop) {
  //   zakpop.classList.remove("open");
  //  }

  // //  popuplink.addEventListener ("click" , function() {
  // //       popuplink.classList.remove("open");
  // //  });


  