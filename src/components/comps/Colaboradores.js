export default async function Colaboradores(props) { 



  const html = () => {
    return `
    <div class="home-cards-container">
      <div class="home-img-colaboradores">
        
        ${props.data.dadosC.map(element =>`
        <a href="/#/perfil/${element.id}/" >
          <img id="${element.id}" src="${element.img}" width="50px" height="50px" alt="Dados Usuários">
          </a>
        `).join('')}
      </div>
    </div>
  `;

  }

  return {html}

   
  

}