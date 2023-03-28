import{ cardDateColaboradores } from "../dados/data.js"

export default function cardColaboradores() { 



   return `
    <div class="home-cards-container">
      <div class="home-img-colaboradores">
        ${cardDateColaboradores.map(element =>`
        <a href="${element[element.id]}" target="_blank">
          <img id="${element.id}" class="home-img-colaboradores-redondo" src="${element.img}" alt="${element.id}></a>
        `).join('')}
      </div>
    </div>
  `;
  

}
