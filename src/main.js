import pages from "./pages/index.js"
import components from "./components/index.js"
import dados from "./data/data.js"
import * as prix from "./lib/@prix.js";

Object.keys(prix).forEach(key => {
  if (typeof prix[key] === 'function') {
    window[key] = prix[key];
  }
});


const data = await dados()


const Config = {
  path: location.origin,


}




Router({pages, components, data}, Config)






