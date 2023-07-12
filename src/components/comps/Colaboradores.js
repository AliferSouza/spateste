export default async function Colaboradores(props) {


  const state = () =>{


  }

  const html = () => {
    return `
      <div class="home-cards-container">     
        <div class="home-img-colaboradores">
          ${props.Data.dadosC
            .map((element) => `      
                <a href="/#/perfil/#${element.id}">
                  <img loading="lazy" id="colaborador-${element.id}" src="${element.img}" width="50px" height="50px" alt="Dados Usuários">
                </a>
         
            `)
            .join('')}
        </div>
      </div>
    `;
  };



  return { html, state };
}
