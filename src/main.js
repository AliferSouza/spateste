import {Router, useGetLocation} from "./lib/index.js"
import pages from "./pages/index.js"
import components from "./components/index.js"


const [lat, log] = await useGetLocation();
console.log("Latitude:", lat);
console.log("Longitude:", log);


Router(pages, components)







