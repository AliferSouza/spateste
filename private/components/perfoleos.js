async function Colaboradores(props) { 
const dadosSelecionado = props.data.produtos.filter(d => d.categoria === props.attributes.id)
  const html = () => {
    return `
    <div class="perfu-container">
      <div class="perfu-container-cor">
      <div class="perfu-container-conteudo">
        <h2>${props.content}</h2>
        ${dadosSelecionado.map(element =>`
        <a href="${props.attributes.a}" >
        <img style="width:${props.attributes.useWidth}; height:${props.attributes.useHeight}  " class="comp-perfoleos-tamanho" id="${element.id}"  data-url-src="${element.img}"   alt="Dados Usuários">
          </a>
        `).join('')}
      </div>
      <div>
    </div>
  `;

  }

  return {html}

   
  

}