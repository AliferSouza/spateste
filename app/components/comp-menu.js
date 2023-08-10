async function Menu(props) {
 
  const html = () => {
    return `   
    <nav > 
    <label class="logo"> <img data-href="/#/home/" src="/img/logo/logo22.png" width="50px" height="50px" alt="Logo"></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>



  
    <ul>
         <li><a class="active" data-href="/#/home/">Início</a></li> 
         <li><a class="active" data-href="/#/shop/">Shop</a></li> 
         <li><a class="active" data-href="/#/shop/perfumaria/#carrinho">Carrinho</a></li> 
    </ul>

  </nav>


  `;
  };

  return {  
    html
    

  }
}
