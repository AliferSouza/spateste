import debounce from "../debounce.js";
import userTags from "./tagsComp.js"
import erroPage from "../erroPage.js";


export default function Router(componentsPages, component) {


  const cache = {};

  function getOrRenderComponent(componentCache) {
    const componentName = componentCache.toLowerCase();
    const currentURL = location.pathname + location.hash;
    document.title = componentName.toUpperCase();
    
    if (!cache[componentName] || cache[componentName].url !== currentURL) {  
      const component = componentsPages[componentCache]();
      cache[componentName] = { component, url: currentURL };
    }
    
    return cache[componentName].component;
  } 
  



  async function route() {
    const URL = location.pathname.split("/")[1] || location.hash.replace("#", "")
    let currentPage = URL === "/" || URL === ""
      ? getOrRenderComponent(Object.keys(componentsPages)[0])
      : componentsPages[URL]
      ? getOrRenderComponent(URL)
      : componentsPages["erro"]
      ? componentsPages["erro"]()
      : erroPage(componentsPages);

 

    userTags(await currentPage, component);
  }

  window.addEventListener("popstate", route);
  function handleClick(e) {
    if (e.target.matches("[data-href]")) {
      e.preventDefault();
      const href = e.target.dataset.href;
      history.pushState(null, null, href);
      route();
    }
  }
  document.body.addEventListener("click", debounce(handleClick, 200));
  route();
}