
export default async function Home() {

  const state = () => {}

  const html = () => {
    return `
    <comp-menu> </comp-menu>
    <comp-slider data-class="container-slider" data-id="1"></comp-slider>
    <comp-colaboradores> </comp-colaboradores>
    <h3>Promoções e pacotes</h3>
    <comp-cardpodutos data-id="promoção"></comp-cardpodutos>
    <h3>Terapias e massagens</h3>
    <comp-cardpodutos data-id="cardDate"></comp-cardpodutos>
    <h3>Estética</h3>
    <comp-cardpodutos data-id="cardDate"></comp-cardpodutos>
    <comp-newsletter data-class="newsletter"> </comp-newsletter>
    <comp-whatsapp></comp-whatsapp>


  
    `

  }

  return {
    html,
    state
  }
   
  
}

