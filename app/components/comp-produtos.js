async  function cardProdutos(props) {
  const dadosSelecionado =  props.Data.dadosP.filter(d => d.categoria === props.attributes.id)
console.log(props)

  const html =  () => {
    const entries = Object.entries(dadosSelecionado);
    const cards = entries.map(([key, value]) => `
      <img data-href="/#/produto/#${value.id.split(" ").join("").toLowerCase()}"
           id="${value.id}"
           class="home-img-card"
           src="${value.img}"
           alt="${value.nome}" width="${props.attributes.width}" height="${props.attributes.height}" alt="Produtos">
          `
    );

  
    return `
      
        <div class="home-img-cards">     
            <div  class="home-img-colob-scroll">
          ${cards.join('')}
         </div>
        </div>
    
    `;
  };

  
  
 
  return {html} 
}


