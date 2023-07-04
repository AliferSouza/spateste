async function perfil(props){
    const nome = location.hash.split('/').pop().replace("#", "")
    const data = props.Dados.colaboradores.find(d=>d.id === nome)
 console.log(data) 

    
    const state = () => {

    }
    const html = () => {
        return `
       <comp-menu></comp-menu>
    
             <div id="perfil">
             <h1>QUEM SOU EU</h1>
            <div id="perfil-img">    
                <img src ="/private/static/img/${data.img}" width="150">
                <h3>${data.nome}</h3>
                <a href="">@mymosdavida</a>
                <h4>${data.funcao} </h4>
               <h5>${data.descricao} </h5>
            </div>  
       
        
          
     
      

        </div>
    
        `

    }

    return{      
        state,
        html
    }
}