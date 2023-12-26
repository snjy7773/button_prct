// [1]=> click a button text color will  change.
var h1 = document.getElementById("h1");
var bt1 = document.querySelector("#bt1");


 
bt1.addEventListener("click", function() {
    
    h1.textContent = "PRACTICE MEJOR BUTTON EVENTS....";
    h1.style.color = "blue"
});
 
//[2]=> click button to change text 
var h2 = document.querySelector("#h2");
var bt3 = document.querySelector("#bt3");

bt3.addEventListener("click", function(){
    h2.textContent = "HOW ARE YOU BRO.."
    // alert("chalen 6")
})

// [3]=> click a button and img position change like swap....
    var img1 = document.querySelector("#img1");
    var img2 = document.querySelector("#img2");
   var bt2 = document.querySelector("#bt2");
    // document.querySelector();
bt2.addEventListener("click", function(){
    // alert("chal raha h");
    var a= img1.src ;
    var b= img2.src ;
    img1.src = b;   
    img2.src = a; 

});

  // 


