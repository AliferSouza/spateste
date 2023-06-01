import { produtos } from '../dados/data.js'
import { dados } from '../dados/data.js'

export default  function cardProdutos(props) {

  const state = () => {  

    console.log(props.attributes)
  }

  
  const html = () => {    
    return `
    <div class="home-cards-container"> 
      <div class="home-img-cards"> 
        ${Object.entries(dados[props.attributes.id]).map(([key, value]) => `      
        <img data-href="${`/#/info/${dados[props.attributes.id][key].id}`}"
         id="${key || ''}"
         class="home-img-card"
         src="${value.img}"
          alt="${value.pro}">`)}
      </div>
    </div>
  `

  }
  return {
    html,
    state
  }

}


