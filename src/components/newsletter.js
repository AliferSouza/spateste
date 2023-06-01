export default async function newsletter(props) {


  const html = () => {
    return `
    <form class="cardd" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScjalDXW7rDe411G6pGQ3ITXVuK4UxBRoATRGMECWwDiMA_hw/formResponse">
   <span class="card__title">Escreva-se</span>
   <p class="card__content">Deixe o seu e-mail para você receber as novidades...
   </p>
   <div class="card__form">
     <input placeholder="E-mail" name="entry.2146642346" type="text">
     <button class="sign-up">Escrever-se</button>
   </div>
  </form>
   `
  }

  return {
    html
  }


}
