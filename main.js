var h1 = document.getElementById("h1");
var bt1 = document.querySelector("#bt1");

// bt1.addEventListener("click", function() {
    
//     h1.innerHTML = "welcome to coding home -please strat coding......"
//     h1.style.color = "red"
    
// });
 
bt1.addEventListener("click", function() {
    
    h1.textContent = "PRACTICE MEJOR BUTTON EVENTS....";
    h1.style.color = "pink"
});
 

// [2]=> click a button and img position change like swap....
    var img1 = document.querySelector("#img1");
    var img2 = document.querySelector("#img2");
    // document.querySelector();
document.querySelector("#bt2").addEventListener("click", function(){
    // alert("chal raha h");
    img2.src =  img1.src; 
    img1.src = img2.src;   
    var a= img1.src ;
    var b= img2.src ;
   console.log(a,b);
})
   


