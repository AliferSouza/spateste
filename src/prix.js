const ROOT = document.querySelector("#app");
const STYLE = document.querySelector("style");
async function useGetModules(caminho) {
  let result;

  try {
    result = await import(`${caminho}`).then((module) => module.default);
  } catch (error) {
    // Trate o erro de importação aqui
    console.error("Erro ao importar o arquivo:", error);
    // Defina um valor padrão para result ou faça qualquer outra ação adequada
  }

  return result;
}

async function useApi(url, method, useType) {
  try {
    const res = await fetch(url, method);
    let data;

    if (useType === "text") {
      data = await res.text();
    } else if (useType === "json") {
      data = await res.json();
    }

    return data;
  } catch {
    return null;
  }
}

function useLocalStorage(operation, name, props) {
  if (operation === "getItem") {
    return JSON.parse(window.localStorage.getItem(name));
  } else if (operation === "setItem") {
    window.localStorage.setItem(name, JSON.stringify(props));
  } else if (operation === "setItems") {
    const items = JSON.parse(localStorage.getItem(name) || "[]");
    items.push(props);
    localStorage.setItem(name, JSON.stringify(items));
  }
}

async function useLocation() {
  async function getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        const error = new Error(
          "Geolocation is not supported by this browser."
        );
        reject(error);
      }
    });
  }

  try {
    const { latitude, longitude } = await getLocation();
    return [latitude, longitude];
  } catch (error) {
    console.log("Erro ao obter localização:", error.message);
    return [null, null];
  }
}

async function useNavigate(Rota, Pages) {
  history.pushState(null, null, Rota);
  Router(Pages);
}

async function useId(senha) {
  try {
    // Converte a senha para um ArrayBuffer
    const encoder = new TextEncoder();
    const senhaBytes = encoder.encode(senha);

    // Calcula o hash SHA-256 da senha
    const hashBuffer = await crypto.subtle.digest("SHA-256", senhaBytes);

    // Converte o hash para uma string hexadecimal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  } catch (error) {
    throw new Error("Erro ao criptografar a senha: " + error);
  }
}

function useSearch(props) {
  try {
    const location = window.location;
    const prop = location[props];
    return decodeURIComponent(prop) || location;
  } catch (error) {
    throw error;
  }
}

async function useCSVToJSON(url, ct) {
  const response = await fetch(url, {
    headers: {
      ct,
    },
  });
  const data = await response.text();

  const lines = data.split("\n");
  const keys = lines[0].split(";");

  return lines.slice(1).map((line) => {
    return line.split(";").reduce((acc, cur, i) => {
      const toAdd = {};
      toAdd[keys[i]] = cur;
      return { ...acc, ...toAdd };
    }, {});
  });
}

function useJSONToCSV(objArray, keys) {
  return [
    keys.join(","),
    ...objArray.map((row) => keys.map((k) => row[k] || "").join(",")),
  ].join("\n");
}

function useExeFucTemp(func, time) {
  setTimeout(function () {
    func();
  }, time || 1);
}

function useCSS(selector, styles) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    Object.keys(styles).forEach((property) => {
      element.style[property] = styles[property];
    });
  });
}

function $(arg1, arg2) {
  if (typeof arg1 === "string") {
    if (arg2) {
      document.querySelector(arg1).innerHTML = arg2;
    }
    return document.querySelector(arg1);
  } else if (Array.isArray(arg1)) {
    arg1.forEach((element, index) => {
      const selector = Object.keys(element)[0];
      const attributes = Object.values(element)[0];

      const targetElements = document.querySelectorAll(selector);

      targetElements.forEach((targetElement) => {
        for (const [attribute, value] of Object.entries(attributes)) {
          if (attribute === "innerHTML") {
            targetElement.innerHTML = value;
          } else {
            targetElement.setAttribute(attribute, value);
          }
        }
      });
  
      return targetElements
    });

    // Define e retorna a variável "elements" se necessário
    const elements = document.querySelectorAll(
      arg1.map((element) => Object.keys(element)[0]).join(", ")
    );
    return elements.length > 1 ? elements : elements[0];
  }
}


///////////////////////////////////////////////////////////


function Router(Pages, components, Data) {


  async function customTags(renderStyle, renderedHtml, renderState) {
    STYLE.innerHTML = "";
    const stateFunctions = [];
    const stateStyles = [];
  
    const divTemporaria = document.createElement("div");
    divTemporaria.insertAdjacentHTML("beforeend", renderedHtml);
  
    const tagElements = [...divTemporaria.querySelectorAll("*")].filter(
      (element) => element.tagName.toLowerCase().match(/^comp-[a-z]+$/)
    );
  
    await Promise.all(
      tagElements.map(async (elem, i) => {
        const newTag = document.createElement(`${elem.tagName.toLowerCase()}-${i}`);
        elem.replaceWith(newTag);
  
        const attributes = { ...elem.dataset };
  
        Object.entries(attributes).forEach(([key, value]) => {
          newTag.setAttribute(key, value);
        });
  
        const dataApp = {
          reference: i,
          nameTag: newTag.tagName.toLowerCase(),
          attributes,
          parameter: Object.fromEntries(
            new URLSearchParams(location.href.split("?")[1]).entries()
          ),
          page: location.hash.replace("#", "").match(/^\/(\w+)(\/)?/),
          content: elem.innerText,
          data: Data,
        };
  
        const componentKey = elem.tagName.toLowerCase();
        const { style, html, state } = await components[componentKey](dataApp);
  
        if (typeof style === "function") {
          stateStyles.push(style);
        }
        if (typeof html === "function") {
          newTag.innerHTML = html();
        }
        if (typeof state === "function") {
          stateFunctions.push(state);
        }
      })
    );
  
    const concatenatedClasses = stateStyles.map((style) => style()).join(" ");
  
    if (typeof concatenatedClasses === "string") {
      let pageStyle;
      if (typeof renderStyle === "function") {
        pageStyle = renderStyle();
      }
      STYLE.innerHTML += concatenatedClasses + pageStyle;
    }
  
    ROOT.innerHTML = divTemporaria.innerHTML;
    if (typeof renderState === "function") {
      renderState();
    }
    stateFunctions.forEach((stateFunction) => stateFunction());
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
      const  paginasData = {Pages, Data}
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
    ROOT.innerHTML = `
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

export {
  useLocalStorage,
  useApi,
  useGetModules,
  useSearch,
  useExeFucTemp,
  useId,
  useLocation,
  useCSVToJSON,
  useJSONToCSV,
  useNavigate,
  useCSS,
  $,
  Router,
};
