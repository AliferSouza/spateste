import { usePrix } from "../lib/prix.js";
export default async function data() {
  const useCSVToJSON =  await usePrix("lib", "useCSVToJSON.js")
 
 const colaboradores = await useCSVToJSON("http://127.0.0.1:5500/private//static/data/colaboradores/colaboradores.csv")
 const produtos = await useCSVToJSON("http://127.0.0.1:5500/private//static/data/massagens/massagens.csv")
const data = {
  colaboradores,
  produtos
}
return data

}
