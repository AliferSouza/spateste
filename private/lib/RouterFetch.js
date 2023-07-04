 async function Router(PagesComponentsData = {}, Config = {}) {


  const useApi = async (pasta, func) => {
    const url = `${location.origin}/${Config.pathGlobal || "private" }/${pasta}/${func}.js`     
 
   try {
      const res = await fetch(url);        
      let data = await res.text();  
      const returnFunction = Function("return " + data)();  
      return await returnFunction
    } catch {
      return null;
    }
  
  }

  const nativefunction = () => {    
    const elements = document.querySelectorAll("[data-url-src]");
     elements.forEach(async (element) => {  
      const attributes = { ...element.dataset };
      const url = `${location.origin}/${Config.pathGlobal || "private"}/${Config.pathImg || "static/img" }/${element.dataset.urlSrc}`
      try {
        const response = await fetch(url);
  
        if (response.ok) {
          const blob = await response.blob();
          const imageUrlObject = URL.createObjectURL(blob);
          const img = document.createElement('img');
          element.src = imageUrlObject
          element.appendChild(img);
        } else {
          console.error('Error fetching the image');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });

  }

  const [Page = {}, Dados = {}] = Object.values(PagesComponentsData);
 

    const root = document.querySelector("#app");
    const style = document.querySelector("style");

    const virtualDom = (originalHtml) => {
      const divTemporaria = document.createElement("div");
      divTemporaria.insertAdjacentHTML("beforeend", originalHtml);
      return divTemporaria;
    };
    const selectCustomTags = (virtualPageComponentes) => {
      const tagsComponent = [
        ...virtualPageComponentes.querySelectorAll("*"),
      ].filter((element) => element.tagName.toLowerCase().match(/^comp-/i));
  
      return tagsComponent;
    };
  
    let stateStylesComponet = [];
    let stateFunctionsComponet = [];
    const [Pages, Components, Data] = Object.values(PagesComponentsData);
  
    const renderCompDom = async (tagSelectendVirtualDOM) => {
      const fetchPromises = tagSelectendVirtualDOM.map(async (elem, i) => {    
        const componentKey = elem.tagName.toLowerCase().replace("comp-","") 
        const attributes = { ...elem.dataset };
        elem.setAttribute("key", `${elem.tagName.toLowerCase()}-${i}`);
  
        const dataApp = {
          reference: i,
          key: elem.getAttribute("key"),
          attributes,
          parameter: Object.fromEntries(
            new URLSearchParams(location.href.split("?")[1]).entries()
          ),
          page: location.hash.replace("#", "").match(/^\/(\w+)(\/)?/),
          content: elem.innerText,
          data: Dados,
        };


        const ComponentFetch = await useApi(Config.pathComponents || "components", componentKey)   
        const retonarPaginaOcultaEmFunção = Function("return " + ComponentFetch)();
        const { html, state, style } = await retonarPaginaOcultaEmFunção(dataApp);
         
         
        if (typeof style === "function") {
          stateStylesComponet.push(style);
        }
        if (typeof html === "function") {
          elem.innerHTML = html();
        }
        if (typeof state === "function") {
          stateFunctionsComponet.push(state);
        }
      });
      await Promise.all(fetchPromises);
    };
  
    async function customTags(renderStyle, renderedHtml, renderState) {
      style.innerHTML = "";
  
      const virtualPageComponentes = virtualDom(renderedHtml);
      const tagSelectendVirtualDOM = selectCustomTags(virtualPageComponentes);
      await renderCompDom(tagSelectendVirtualDOM, Components);
      const concatenatedClasses = stateStylesComponet
        .map((style) => style())
        .join(" ");
  
      style.innerHTML += concatenatedClasses + renderStyle;
      root.innerHTML = virtualPageComponentes.innerHTML;
  
      if (typeof renderState === "function") {
        renderState();
      }
      stateFunctionsComponet.forEach((stateFunction) => stateFunction());
      nativefunction()
    }
  
    async function routerStatePages() {
      const dataUrl = location.hash.replace("#", "") || location.pathname;
  
      const currentPage =
        dataUrl === "/"
          ? Object.keys(Pages)[0]
          : dataUrl.split("#")[0].split("/").filter(Boolean).pop();
  
      const resultUrl = currentPage && Pages[currentPage] ? currentPage : "erro";
      if (resultUrl === "erro") {
        erroPage(Pages);
      } else {
        const Data =  { Dados };    
        const pegarPaginaOculta = await useApi(Config.pathPages || "pages", currentPage)   

        const { html, state, style } = await pegarPaginaOculta(Data)   
        const renderStyle = typeof style === "function" ? style : undefined;
        const renderedHtml = typeof html === "function" ? html() : html()
        const renderState = typeof state === "function" ? state : undefined; 
        customTags(renderStyle, renderedHtml, renderState);

 
      }
    }
  
    function debounce(fn, delay) {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    }
  
    function erroPage(Pages) {
      root.innerHTML = `
      <div class="erroPages">
        ${Object.keys(Pages)
          .map(
            (page, index) =>
              `<a class="pagina-erro" id="${index}"  data-href="/#/${page}/">${page.toUpperCase()}</a>`
          )
          .join("")}
      </div>
    `;
    }
  
    function handleClick(e) {
      if (e.target.matches("[data-href]")) {
        e.preventDefault();
        const href = e.target.dataset.href;
        history.pushState(null, null, href);
        routerStatePages();
      }
    }
  
    window.addEventListener("popstate", routerStatePages);
    document.body.addEventListener("click", debounce(handleClick, 200));
    routerStatePages();
}