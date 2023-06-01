import { produtos } from '../dados/data.js'
import { dados } from '../dados/data.js'

export default  function cardProdutos(props) {

 
  const html = () => {
    const entries = Object.entries(dados[props.attributes.id]);
    const cards = entries.map(([key, value]) => `
      <img data-href="/#/info/${value.id}"
           id="${key || ''}"
           class="home-img-card"
           src="${value.img}"
           alt="${value.pro}" width="200px" height="300px" alt="Produtos">`
    );

  
    return `
      <div class="home-cards-container"> 
        <div class="home-img-cards"> 
          ${cards.join('')}
        </div>
      </div>
    `;
  };
  
  
 
  return {html} 
}


