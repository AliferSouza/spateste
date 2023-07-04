async function Colaboradores(props) { 
  return{
  html: () => `
    <div class="home-cards-container">
      <div class="home-img-colaboradores">        
        ${props.data.colaboradores.map(element =>`
        <a href="/#/perfil/${element.id}/" >
          <img id="${element.id}"  data-url-src="${element.img}" width="50px" height="50px" alt="Dados Usuários">
          </a>
        `).join('')}
      </div>
    </div>
  `  
}
}

  

   
  

