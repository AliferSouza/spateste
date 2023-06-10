import { useNavigate, useGetModules } from "../lib/index.js"


export default async function Menu(props) {



   const state = async () =>{
    const a = document.querySelector("ul")
    const Pages =  await useGetModules("../../../pages/index.js")
      a.addEventListener('click', e =>{ 
      const keyAttribute = e.target.getAttribute('key'); 
       history.pushState(null, null, keyAttribute);
       useNavigate(Pages, keyAttribute)
     })

   }
  
  const html = () => {
    return `   
    <nav>
    <label class="logo"> <img data-href="/#/home/"  src="./src/img/logo22.png" width="70px" height="70px" alt="Logo"></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>
  
    <ul>
      <li><a class="active" key="/#/">Início</a></li> 
      <li><a class="active" key="/#/teste">Bate-papo</a></li> 
    </ul>
  </nav>


  `;
  };

  return {
    html,
    state
  }
}
