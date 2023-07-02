

export default async function personalizado(props) {

    const state = () => {
        const comboboxRegiao = document.getElementById('Região');
        const selectRegiao = document.getElementById('select-regiao');
        const componetEscolhaLocalSuperior =`
        <select class="opcoes" id="localSuperior">
            <option value="opcao1">Pescoço</option>
            <option value="opcao2">Ombros</option>   
            <option value="opcao3">Costas</option> 
            <option value="opcao4">Braços</option> 
        </select>
        `
        selectRegiao.innerHTML = componetEscolhaLocalSuperior
 

        comboboxRegiao.addEventListener('change', (e) => {
        const opcaoSelecionada = comboboxRegiao.value;
   
     
        if (opcaoSelecionada === 'opcao1') {
            selectRegiao.innerHTML = componetEscolhaLocalSuperior
        } else if (opcaoSelecionada === 'opcao2') {
            selectRegiao.innerHTML = `
            <select class="opcoes" id="localInferior">
                <option value="opcao1">Pernas</option>
                <option value="opcao2">Glúteos</option>   
                <option value="opcao3">Pés</option> 
            </select>
            `;
        }
        });




    }

    const html = () => {
        return `       
       <comp-menu></comp-menu>
       <div class="per-container">
        <h3>Personaliza seu pacote</h3>

        <select class="opcoes" id="massagem">
        <option value="opcao1">Massagem terapêutica</option>
        <option value="opcao2">Massagem Modeladora</option>
        <option value="opcao3">Massagem Despotiva</option>
        </select>

        <select class="opcoes" id="Região">
        <option value="opcao1"selected>Região Superior</option>
        <option value="opcao2">Região inferior</option>   
        </select>

        <div class="select-regiao" id="select-regiao"></div>

      
        `
    }


    return {        
        state,
        html
    }
}