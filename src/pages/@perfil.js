export default function perfil(props){
    const nome = useSearch("hash").split('/').pop().replace("#", "")    
    const data = props.Data.dadosC.find(d=>d.id === nome) 
    document.title = nome

     const html = () => {
        return `
       <comp-menu></comp-menu>
    
             <div id="perfil">
             <h1>QUEM SOU EU</h1>
            <div id="perfil-img">    
                <img src="${data.img}" width="150">
                <h3>${data.nome}</h3>
                <a href="">@mymosdavida</a>
                <h4>${data.funcao} </h4>
               <h5>${data.descricao} </h5>
            </div>  
       
        
          
     
      

        </div>
    
        `

    }

    return{     
        
        html
    }
}