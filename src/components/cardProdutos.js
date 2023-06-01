import { produtos } from '../dados/data.js'
import { dados } from '../dados/data.js'

export default  function cardProdutos(props) {
  
  const html = () => {    
    return `
    <div class="home-cards-container"> 
      <div class="home-img-cards"> 
        ${Object.entries(dados[props.attributes.id]).map(([key, value]) => `      
        <img data-href="/#/info/${key}" id="${key || ''}" class="home-img-card" src="${value.img}" alt="${value.pro}">
              `).join('')}
      </div>
    </div>
  `

  }
  return {
    html
  }

}


