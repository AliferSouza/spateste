export default async function slider() {
  const style = () => {
    return `
    .slideshow-container {
        position: relative;
        max-width: 100%;
        margin: auto;
        width: 100%;
        height: 280px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mySlides {
        display: none;
        width: 100%;     
    }

    .slideshow-container button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 15px;
        padding: 5px 10px;
        border: none;
        cursor: pointer;
    }

    .slideshow-container .prev {
        left: 10px;
    }

    .slideshow-container .next {
        right: 10px;
    }
 `


}
const state = () => {
  var slideIndex = 1;
  showDivs(slideIndex);

  prix.$("#prevBtn").addEventListener("click", function() {
    plusDivs(-1);
  });

  prix.$("#nextBtn").addEventListener("click", function() {
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
      <button class="prev" id="prevBtn">&#10094;</button>
      <img class="mySlides" src="./src/public/img/slide/banner2.PNG">
      <img class="mySlides" src="./src/public/img/slide/banner3.PNG">
      <img class="mySlides" src="./src/public/img/slide/banner.jpg">
      <button class="next" id="nextBtn">&#10095;</button>
      
    </div>`
}
return {
  style,
  html,
  state
}


}