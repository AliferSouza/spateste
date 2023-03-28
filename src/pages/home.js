export default async function Home() {
   
  return `
    <comp-menu> </comp-menu>
    <div class="container-home">

      <br>
      <comp-slider data-class="container-slider"></comp-slider>

      <br>

      <comp-colaboradores> </comp-colaboradores>
      <br>

      <h3 style="color: #fff">Promoções e pacotes</h3>
      <comp-cardpodutos></comp-cardpodutos>
      <br>
      <h3 style="color: #fff">Terapias e massagens</h3>

      <comp-cardpodutos></comp-cardpodutos>
      <br>
      <h3 style="color: #fff">Cursos</h3>
      <comp-cardpodutos></comp-cardpodutos>
      <br>
      <h3 style="color: #fff">Spa -Vida Sants</h3>

    </div>
    `;
}

