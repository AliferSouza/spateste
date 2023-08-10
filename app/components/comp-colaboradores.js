async function Colaboradores(props) {

  const html = () => {
    return `
      <div class="home-cards-container-colaborado">     
        <div class="home-img-colaboradores">
          ${props.Data.dadosC
            .map((element) => `      
                <a href="/#/perfil/#${element.id}">
                  <img src="${element.img}"  id="colaborador-${element.id}" src="" width="100%" height="100%" alt="Dados Usuários">
                </a>
         
            `)
            .join('')}
        </div>
      </div>
    `;
  };



  return { html };
}
