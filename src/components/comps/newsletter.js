export default async function newsletter(props) {

  const style = ()=>{
    return`    
    .card-${props.reference} {
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 12px;
      background: linear-gradient(45deg, #04051dea 100%, #dd8ecd 80%);

    }

    .card__title-${props.reference} {
      margin-top: 10px;
      font-size: 23px;
      font-weight: 900;
      color: #f8f8f8;
    }

    .card__content-${props.reference} {
      font-size: 13px;
      color: #f9f9f9;
    }

    .card__form-${props.reference} {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .card__form-${props.reference} input {
      width: 200px;
      margin-top: 10px;
      outline: 0;
      background: rgb(255, 255, 255);
      box-shadow: transparent 0px 0px 0px 1px inset;
      padding: 1rem;
      border-radius: 14px;
      border: 1px solid #333;
      color: black;
    }

    .card__form-${props.reference} button {
    background: #dd8ecd;
    }

    .card__form-${props.reference} button {
      border: 0;
      background: #111;
      color: #fff;
      padding: 0.68em;
      border-radius: 14px;
      font-weight: bold;
    }
  
`
  }

  const html = () => {
    return `
    <form class="card-${props.reference}" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScjalDXW7rDe411G6pGQ3ITXVuK4UxBRoATRGMECWwDiMA_hw/formResponse">
   <span class="card__title-${props.reference}">Escreva-se</span>
   <p class="card__content-${props.reference}">Deixe o seu e-mail para você receber as novidades...
   </p>
   <div class="card__form-${props.reference}">
     <input placeholder="E-mail" name="entry.2146642346" type="text">
     <button class="sign-up">Escrever-se</button>
   </div>
   <br>
  </form>
   `
  }

  return {
    style,
    html
  }


}
