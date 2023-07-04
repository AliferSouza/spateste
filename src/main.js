import {usePrix} from "./lib/prix.js"
window.usePrix = usePrix
import dados from "./data/data.js"
const data = await dados()
const Router =  await usePrix("lib", "RouterFetch.js")

const pages = { home:"home",               
                perfil: "perfil",
                produtos: "produtos",
                shop: "shop",
                shopproduto: "shopproduto",                

            }

const Config = { 
 pathGlobal:"private",
 pathPages:"pages",
 pathComponents:"components",
 pathImg:"static/img",
 pathData:"static/data",
               }


await Router({ pages, data }, Config)








