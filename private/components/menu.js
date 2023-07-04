async function Menu(props) {

 
  const html = () => {
    return `   
    <nav>
    <label class="logo"> <img data-href="/#/home/" style="position: relative; left: 15px" data-url-src="logo/logo.png"  width= 60 ></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>
  
    <ul>
         <li><a class="active" href="/#/home/">Início</a></li> 
         <li><a class="active" href="/#/perfil/">perfil</a></li> 

    </ul>

  </nav>


  `;
  };

  return {  
    html
    
  }
}
