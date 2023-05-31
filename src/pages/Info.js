import { useSearch } from "../lib/index.js";
import { produtos } from "../dados/data.js";

export default async function Info(){
    const value = useSearch("hash")
	var nome = value.split("/").pop();
    const data =  produtos[nome] 


	const html = () => {
		return `
		<comp-menu> </comp-menu>
   
		<div class="cards">
   
	   <article class="information [ card ]">
		   <span class="tag">Massagem</span>
		   <h2 class="title">${data.pro}</h2>
		   <p class="info">${data.info}</p>
		   <button class="button">
			   <span>Agende</span>
			   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none">
				   <path d="M0 0h24v24H0V0z" fill="none" />
				   <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor" />
			   </svg>
		   </button>
	   </article>
   
	   <article class="plan [ card ]">
		   <div class="inner">
   
			   <span class="pricing">
				   <span>
					   R$200 <small>/ 5</small>
				   </span>
			   </span>
			   <br>
			   <h2 class="title">Profissional</h2>
			   <p class="info">Este plano é de custo benefício.</p>
			   <ul class="features">
				   <li>
					   <span class="icon">
						   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
							   <path fill="none" d="M0 0h24v24H0z" />
							   <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
						   </svg>
					   </span>
					   <span><strong>5</strong> ${data.pro}</span>
				   </li>
				   <li>
					   <span class="icon">
						   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
							   <path fill="none" d="M0 0h24v24H0z" />
							   <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
						   </svg>
					   </span>
					   <span>1 <strong> Spa dos pés</strong></span>
				   </li>
				   <li>
					   <span class="icon">
						   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
							   <path fill="none" d="M0 0h24v24H0z" />
							   <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
						   </svg>
					   </span>
					   <span>1° sessão de terapia</span>
				   </li>
			   </ul>
			   <button class="button">
				   Conheça mais
			   </button>
		   </div>
	   </article>
   
	   <article class="information [ card ]">
		   <h2 class="title">Agende uma sessão de massagem única</h2>
		   <p class="info">Valor individual 120 reais  </p>
		   <dl class="details">
			   <div>
				   <dt>Sastifação</dt>
				   <dd>100%</dd>
			   </div>
			   <div>
				   <dt>Cliente</dt>
				   <dd>120</dd>
			   </div>
		   </dl>
	   </article>
   </div>
	   `

	}
	return{
		html
	}
	
    
}