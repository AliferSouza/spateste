async function Menu(props) {

 
  const html = () => {
    return `   
    <nav>
    <label class="logo"> <img data-href="/#/home/"  src="./public/img/logo/logo.png" width="70px" height="70px" alt="Logo"></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>
  
    <ul>
         <li><a class="active" data-href="/#/home/">Início</a></li> 
         <li><a class="active" data-href="/#/personalizado">personalizado</a></li> 
         <li><a class="active" data-href="/#/shop">Shop Perfumaria</a></li> 
    </ul>

  </nav>


  `;
  };

  return {  
    html
    
  }
}
