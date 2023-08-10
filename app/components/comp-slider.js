function slider(props) {
  const state = () => {
        
        let slideIndex = 0;
        showDivs(slideIndex);

      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");

      prevBtn.addEventListener("click", function () {
        plusDivs(-1);
      });

      nextBtn.addEventListener("click", function () {
        plusDivs(1);
      });

      function plusDivs(n) {
        showDivs((slideIndex += n));
      }

      function showDivs(n) {
        const slides = document.getElementsByClassName("mySlides");
        if (slides.length === 0) {
          return; // Nenhum slide encontrado, retorna sem fazer nada
        }
        slideIndex = (n + slides.length) % slides.length; // Lógica para garantir que slideIndex seja um valor válido

        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
  }
  }
  const html = () => `
    <div class="slideshow-container">
      <button class="prev" id="prevBtn">&#10094;</button>
      <img class="mySlides" src="/img/slide/banner.png" alt="Slider 1 promoções">
      <img class="mySlides" src="/img/slide/bannerr.png" alt="Slider 1 Novidades">
      <img class="mySlides" src="/img/slide/bannerpais.jpeg" alt="Slider 1 Sobre nós">
      <button class="next" id="nextBtn">&#10095;</button>      
    </div>`;

  return {
    html,
    state
    
  };
}
