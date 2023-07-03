import { Router, useCSVToJSON } from "./lib/prix.js"
import* as prix from"./lib/prix.js"
window.prix = prix

const dadosP = await useCSVToJSON("../../public/data/massagens/massagens.csv")
const dadosC = await useCSVToJSON("../../public/data/colaboradores/colaboradores.csv")
const dados ={
    dadosP,
    dadosC
}



const Page ={
    home: "home",
    perfil: "perfil",
    produtos:"produtos",
    shop: "shop",
    personalizado:"personalizado",
    perfumaria:"perfumaria"
    
}

const components =  {
    "comp-menu": 'menu',
    "comp-slider": 'slider',
    "comp-colaboradores": 'colaboradores',
    "comp-produtos": 'produto',
    "comp-newsletter": 'newsletter',
    "comp-whatsapp":   'Whatsapp',
    "comp-mascoteia": 'mascoteIa',
    "comp-ia": 'ia',
    "comp-perfoleos": 'perfOleos',
    "comp-video": 'video',
    "comp-flutuante": 'flutuante',
    "comp-img-fetch": 'imgfetch'
}


Router(Page, components, dados)






