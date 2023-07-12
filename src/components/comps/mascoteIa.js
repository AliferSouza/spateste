import ia from "./telaIA.js"
export default async function mascoteIa(props) {

  const state  = () => {
    $(props.nameTag).addEventListener("click", async (e) => {   
      if (e.target.tagName === "IMG") {
        const dadosCom = await ia();     
        prix.$("#receberIa").innerHTML = dadosCom.html()
        dadosCom.state()
      }
    });
  }

  const html = () => {
    return `  
    
      <img style class="SairIa" src="./src/public/img/icones/mascote.png"  alt="Mascote"  width="40px" height="50px">
   
 `
  }
  return {    
    html,
    
  };
}
