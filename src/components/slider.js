import {useMemo} from "../lib/index.js"

export default async function slider(props) {
const images = ['./src/img/banner1.PNG', './src/img/banner2.PNG', './src/img/banner3.PNG' ];


return`<div class="slideshow-container">
  ${images.map((image, index) => `
  <div class="slideshow-slide">
    <img src="${image}">`).join('')}
  </div>
</div>`
}