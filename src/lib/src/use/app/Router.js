const ROOT = document.querySelector("#app");


function customTags(sortedOut, components) {
  try {
    const tagNames = sortedOut.match(/<(comp-[a-z]+)/g);
    const div = document.createElement("div");
    div.innerHTML = sortedOut;

    if (!tagNames) {
      ROOT.innerHTML = sortedOut;
      return;
    }

    tagNames.forEach(async (elem, i) => {
      const compAlgo = elem.match(/(comp-[a-z]+)/g)[0];
      const elementDom = div.querySelector(compAlgo);
      if (!elementDom) {
        console.log(`Não foi possível encontrar a tag ${compAlgo}`);
        return;
      }

     const attributes = { ...elementDom.dataset };

     const newTag = document.createElement(`${compAlgo}-${i}`);
      elementDom.parentNode.replaceChild(newTag, elementDom)
         
      Object.entries(attributes).forEach(([key, value]) => {
        newTag.setAttribute(key, value);
      });  
    

      const dataApp = {
        referencia: i,
        nameTag: newTag.tagName.toLowerCase(),
        attributes: attributes,
        parameter: Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),
        pagina:  location.hash.replace("#", "").match(/^\/(\w+)(\/)?/)[1]   
      };
      
      const html = await components[compAlgo](dataApp)
      newTag.innerHTML = html.html()
      
    });

    ROOT.innerHTML = "";
    ROOT.appendChild(div);

   
  } catch (error) {
    console.error(error);
  }
}

function stateURL(Pages) {
  let URL;
  const dataUrl = location.hash.replace("#", "") || location.pathname;
  if (dataUrl === "/#" || dataUrl === "/#/" || dataUrl === "/") {
    URL = "/";
  } else {
    const match = dataUrl.match(/^\/(\w+)(\/)?/);
    if (match && match[1]) {
      URL = match[1];
    }
  }

  let currentPage =
    URL === "/" || URL === ""
      ? Object.keys(Pages)[0]
      : Pages[URL]
      ? URL
      : Pages["erro"]
      ? Pages["erro"]()
      : erroPage(Pages);

  return currentPage;
}

async function render(Pages, selectedPage, components) {
  let sortedOut = await Pages[selectedPage]();
  let state;
  let html;
  let style;

  if (typeof sortedOut.style === "function") {
    style = sortedOut.style;
  }

  if (typeof sortedOut.html === "function") {
    html = sortedOut.html();
  } else {
    html = sortedOut;
  }

  if (typeof sortedOut.state === "function") {
    state = sortedOut.state;
  }

  if (components === undefined) {
    ROOT.innerHTML = await html;
    sortedOut.state();
  } else {
    customTags(html, components);
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
  ROOT.innerHTML = `
    <div class="erroPages">
      ${Object.keys(Pages)
        .map(
          (page, index) => `
        <a id="${index}" style="color: #fff" data-href="/#/${page}/">${page.toUpperCase()}</a>
      `
        )
        .join("")}
    </div>
  `;
}

export default function Router(Pages, components) {
  function routerState() {
    const selectedPage = stateURL(Pages);
    if (!selectedPage) {
    } else {
      render(Pages, selectedPage, components);
    }
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

