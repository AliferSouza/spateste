import ia from "./telaIA.js"
export default async function mascoteIa(props) {
  const style = () => {
    return`
   .macoteia{

    }
    .mm{
      position: fixed;
      bottom: 55px;
      right: 20px;
      width:50px;
      height:50px;
      color: red;
      cursor: pointer;
    }
    `

  };


  const state  = () => {
    prix.$(props.nameTag).addEventListener("click", async (e) => {   
      if (e.target.tagName === "IMG") {
        const dadosCom = await ia();     
        prix.$("#receberIa").innerHTML = dadosCom.html()
        dadosCom.state()
      }
    });
  }

  const html = () => {
    return `  
    
      <img style class="mm" src="./public/img/icones/mascote.png"  alt="Mascote"  width="40px" height="50px">
   
 `;
  };
  return {
    style,
    state,
    html,
    
  };
}
