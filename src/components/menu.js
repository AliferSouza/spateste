export default async function Menu(props) {
       

    return `   
      <nav>
      <label class="logo"> <img data-href="/"  src="./src/img/logo.png" height="75vh"></label>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        &#x2630
      </label>
    
      <ul>
        <li><a class="active" data-href="/">Início</a></li> 
      </ul>
    </nav>

 
    `

}