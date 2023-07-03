function perfil(){
   
    const state = () => {

        prix.$("#aliferr").addEventListener('click', e=>{
            console.log(prix.$("#alf"))

            if(e.target.id === "alf"){
                e.target.style.display = "none"
    
            }
            if(e.target.innerHTML=== "a"){
                prix.$("#alf").style.display = "block"
    
            }
    
    
       })

    }
    const html = () => {
        return `
        <div id="perfil">
            <h1>QUEM SOU EU</h1>
            <div>36 anos, formada em comunicação social </div>
            <div>Trabalhei como vendedora, secretária e estagiária </div>
            <div>Mãe e empresária</div>
            <img src ="">
            <div>Faladeira</div>
            <div>Amo Pets e tenho 2 gatos e 2 cachorros </div>
            <div>Amo ler sobre horóscopo </div>
            <a href="">
           

          
        </div>
        `

    }

    return{       
        state,
        html
    }
}