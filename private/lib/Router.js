const Router = async (PagesComponentsData = {}, Config = {}) => {
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
        const componentKey = elem.tagName.toLowerCase();
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
          data: Data,
        };
        const { style, html, state } = await Components[componentKey](dataApp);
  
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
    }
  
    async function routerState() {
      const dataUrl = location.hash.replace("#", "") || location.pathname;
  
      const currentPage =
        dataUrl === "/"
          ? Object.keys(Pages)[0]
          : dataUrl.split("#")[0].split("/").filter(Boolean).pop();
  
      const resultUrl = currentPage && Pages[currentPage] ? currentPage : "erro";
  
      if (resultUrl === "erro") {
        erroPage(Pages);
      } else {
        const paginasData = { Pages, Components, Data };
        const { html, state, style } = await Pages[resultUrl](paginasData);
        const renderStyle = typeof style === "function" ? style : undefined;
        const renderedHtml =
          typeof html === "function" ? html() : await Pages[resultUrl]();
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
        routerState();
      }
    }
  
    window.addEventListener("popstate", routerState);
    document.body.addEventListener("click", debounce(handleClick, 200));
    routerState();
}