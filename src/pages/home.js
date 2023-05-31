export default async function Home() {

  const state = () => {}

  const html = () => {
    return `
    <comp-menu> </comp-menu>
    <comp-slider data-class="container-slider" id="1"></comp-slider>
    <comp-colaboradores> </comp-colaboradores>
    <h3>Promoções e pacotes</h3>
    <comp-cardpodutos></comp-cardpodutos>
    <h3>Terapias e massagens</h3>
    <comp-cardpodutos></comp-cardpodutos>
    <h3>Spa -Vida Sants</h3>
    <comp-cardpodutos></comp-cardpodutos>
    <comp-newsletter data-class="newsletter"> </comp-newsletter>

  
    `

  }

  return {
    html,
    state
  }
   
  
}

