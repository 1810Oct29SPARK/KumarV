var slideIndex = 0;
window.onload = function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// let cakeUrl = 'https://www.food2fork.com/api/search?key=c48682eabb66aced3e9307f6f2fc3ad5&q=desserts%20&page=2';

function chocolateCake(){
    fetch(cakeUrl, {method: "GET",})
    //define behavior for when the response returns
    .then((response) => {
        //return unwrapped promise object for the next chaining operation
        return response.json();
    })
        //utilize unwrapped promise a javascript object
    .then((data) => {
        console.log(data);
        let recipes = data.recipes
        
        for(i = 0; i < recipes.length; i++) {
            console.log(recipes[i].source_url);
            $("#sorry").append(`
            
            <div id="more_pics"> 
                <img id="pics" src="${recipes[i].image_url}"> 
            </div>
            
            `)
        }
    })
        
}
chocolateCake();

function calculatePrice() {
var amount = [parseInt(document.getElementById("trufflesNum").value), parseInt(document.getElementById("cakeNum").value), parseInt(document.getElementById("cookiesNum").value)];
var prices = [parseInt(document.getElementById("truffles").innerHTML), parseInt(document.getElementById("lemonCake").innerHTML), parseInt(document.getElementById("cookies").innerHTML)];
console.log(amount);
console.log(prices);
var sum = 0;
for (let i=0; i<amount.length; i++) {
    sum += amount[i]*prices[i];
}
let totalPrice = "$" + sum;
return totalPrice;
}



