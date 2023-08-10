 function perfil(props) {
  const nome = location.hash.split("/").pop().replace("#", "");
  const data = props.Data.dadosC.find((d) => d.id === nome);
  document.title = nome;


  const state = () => {
    const URL = document.querySelector(".buttonperfil");
    const URLSELECT = document.querySelector("#frutas");
    let horario;
    URL.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedValue = URLSELECT.value;

      if (selectedValue === "nove") {
        horario = "9:00";
      } else if (selectedValue === "treze") {
        horario = "13:00";
      } else if (selectedValue === "quinza") {
        horario = "15:00";
      } else if (selectedValue === "quartoze") {
        horario = "16:00";
      }

      const a = `https://api.whatsapp.com/send?phone=553171685900&text=
           Colaborador:${data.nome}
           Horario:${horario} `;
      window.open(a, "_blank");
    });
  };

  const html = () => {
    return `
       <comp-menu></comp-menu>
    
             <div id="perfil">
                 
                    <div id="perfil-img">    
                        <img src="${data.img}" alt="Imagem do colaborado ${data.nome}">                           
                        ${data.nome}
                        <a id="info" href="${
                          data.insta
                        }" target="_blank">@Instagram</a>
                        ${data.funcao}
                                 
                        <h5 id="info">${data.descricao} </h5>
                        ${
                          data.nome === "Viviane"
                            ? "Atendimento exclusivo para terapia."
                            : ""
                        }
                        
                        <label class="selectPerfil" for="frutas">Escolha o horário:</label>
                        <select id="frutas" name="frutas">
                        ${
                          data.nome === "Alifer"
                            ? `
                             <option value="quinza">15:00</option>
                             <option value="quartoze">16:00</option> 
                             <option value="quartoze">18:00</option>`
                            : `
                            <option value="nove">9:00</option>
                            <option value="treze">13:00</option>
                            <option value="quinza">15:00</option>
                            <option value="quartoze">16:00</option>`
                        }
                         
                        </select>

                        <div class="buttonperfilCon" class="buttonperfil">
                        <button url="${data.insta}" class="buttonperfil">
                        <span class="buttonperfil" id="whats">Entre em contato</span>		
                        </button>                                                    
                    </div>   
                    </div>   
        
            
                
              </div>
    
        `;
  };

  return { html, state };
}
