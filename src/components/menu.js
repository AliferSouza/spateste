export default async function Menu(props) {



   const state = () =>{

   }
  
  const html = () => {
    return `   
    <nav>
    <label class="logo"> <img data-href="/#/home/"  src="./src/img/logo.png" height="75vh"></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>
  
    <ul>
      <li><a class="active" data-href="/#/">Início</a></li> 
      <li><a class="active" data-href="/#/teste">Bate-papo</a></li> 
    </ul>
  </nav>


  `;
  };

  return {
    html,
    state
  }
}
