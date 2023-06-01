export default async function slider() {
const state = () => {
  var slideIndex = 1;
  showDivs(slideIndex);

  document.getElementById("prevBtn").addEventListener("click", function() {
    plusDivs(-1);
  });

  document.getElementById("nextBtn").addEventListener("click", function() {
    plusDivs(1);
  });

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }

}

const html = () => {
  return`

<div class="slideshow-container">
  <img class="mySlides" src="./src/img/banner1.PNG">
  <img class="mySlides" src="./src/img/banner2.PNG">
  <img class="mySlides" src="./src/img/banner3.PNG">
  <img class="mySlides" src="./src/img/banner1.PNG">

  <button class="prev" id="prevBtn">&#10094;</button>
  <button class="next" id="nextBtn">&#10095;</button>
</div>`
}
return {
  html,
  state
}


}