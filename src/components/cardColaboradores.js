import{ cardDateColaboradores } from "../dados/data.js"

export default function cardColaboradores() { 

  const html = () => {
    return `
    <div class="home-cards-container">
      <div class="home-img-colaboradores">
        ${cardDateColaboradores.map(element =>`
        <a href="${element[element.id]}" target="_blank">
          <img id="${element.id}" src="${element.img}">
          </a>
        `).join('')}
      </div>
    </div>
  `;

  }

  return {html}

   
  

}