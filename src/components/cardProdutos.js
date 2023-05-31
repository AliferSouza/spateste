import { produtos } from '../dados/data.js'

export default function Card(props) {
  


  const html = () => {    
    return `
    <div class="home-cards-container"> 
      <div class="home-img-cards" cardmassagens> 
        ${Object.entries(produtos).map(([key, value]) => `      
        <img data-href="/#/info/${key}" id="${key}" class="home-img-card" src="${value.img}" alt="${value.pro}">
              `).join('')}
      </div>
    </div>
  `

  }
  return {
    html
  }

}


