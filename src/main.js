import pages from "./pages/index.js"
import components from "./components/index.js"
import * as prix from "./prix.js"
window.prix = prix

const dadosP = await prix.useCSVToJSON("../../src/public/data/massagens/massagens.csv")
const dadosC = await prix.useCSVToJSON("../../src/public/data/colaboradores/colaboradores.csv")
const data = {
    dadosC,
    dadosP
}


prix.Router(pages, components, data)






