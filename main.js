// [1]=> click a button text color will  change.
var h1 = document.getElementById("h1");
var bt1 = document.querySelector("#bt1");

 
bt1.addEventListener("click", function() {
    
    h1.textContent = "PRACTICE MEJOR BUTTON EVENTS....";
    h1.style.color = "pink"
});
 

// [2]=> click a button and img position change like swap....
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


