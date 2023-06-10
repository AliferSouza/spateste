// Referência ao elemento raiz da aplicação
const ROOT = document.querySelector("#app");

// Import do módulo useGetModules responsável por obter os módulos de componentes
import useGetModules from "./useGetModules.js";



/**
 * Renderiza os elementos personalizados com base no HTML fornecido e suas definições de componentes.
 * @param {string} sortedOut - HTML renderizado contendo elementos personalizados.
 * @param {Function} statePage - Função de estado da página.
 * @returns {Promise<void>} - Uma promessa que é resolvida quando a renderização dos elementos personalizados é concluída.
 */
async function customTags(sortedOut, statePage) {
  /**
   * Obtém os módulos de componentes necessários.
   * @private
   * @returns {Object} - Objeto contendo os módulos de componentes.
   */
  async function getComponents() {
    return await useGetModules("../../../components/index.js");
  }

  const components = await getComponents();
  const stateFunctions = [];
  const divTemporaria = document.createElement("div");
  divTemporaria.insertAdjacentHTML("beforeend", sortedOut);

  const tagElements = [...divTemporaria.getElementsByTagName('*')].filter((element) =>
    element.tagName.toLowerCase().match(/^comp-[a-z]+$/));

  await Promise.all(tagElements.map(async (elem, i) => {
    const newTag = document.createElement(`${elem.tagName.toLowerCase()}-${i}`);
    elem.replaceWith(newTag);

    const attributes = { ...elem.dataset };
    Object.entries(attributes).forEach(([key, value]) => {
      newTag.setAttribute(key, value);
    });

    const dataApp = {
      referencia: i,
      nameTag: newTag.tagName.toLowerCase(),
      attributes,
      parameter: Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),
      pagina: location.hash.replace("#", "").match(/^\/(\w+)(\/)?/)
    };

    const { html, state } = await components[elem.tagName.toLowerCase()](dataApp);
    newTag.innerHTML = html();

    if (typeof state === "function") {
      stateFunctions.push(state);
    }
  }));

  ROOT.innerHTML = "";
  ROOT.appendChild(divTemporaria);
  window.scrollTo(0, 0);
  if (typeof statePage === "function") {
    statePage();
  }
  stateFunctions.forEach((stateFunction) => {
    stateFunction();
  });
}





/**
 * Renderiza a página correspondente com base na página selecionada.
 * @param {Object} Pages - Objeto que mapeia URLs para funções de renderização de páginas.
 * @param {string} selectedPage - Nome da página selecionada.
 * @returns {Promise<void>} - Uma promessa que é resolvida quando a renderização é concluída.
 */
async function render(Pages, selectedPage) {
  if (selectedPage === "erro") {
    erroPage(Pages);
  } else {
    const { html, state, notTags } = erroPage(Pages) || await Pages[selectedPage]();
    const renderedHtml = typeof html === "function" ? html() : html;
    const renderedState = typeof state === "function" ? state : undefined;

    if (notTags === undefined) {
      customTags(renderedHtml, renderedState);
    } else {
      ROOT.innerHTML = renderedHtml;
      renderedState && renderedState();
    }
  }
}




/**
 * Obtém o estado da URL atual e retorna a página correspondente.
 * @param {Object} Pages - Objeto que mapeia URLs para funções de renderização de páginas.
 * @returns {string} - Nome da página correspondente à URL atual.
 */
function stateURL(Pages) {
  /**
   * Verifica a URL atual e determina a página correspondente.
   * @private
   * @returns {string} - Nome da página correspondente à URL atual.
   */
  function getCurrentPage() {
    const dataUrl = location.hash.replace("#", "") || location.pathname;
    let currentPage;

    if (dataUrl === "/#" || dataUrl === "/#/" || dataUrl === "/") {
      currentPage = Object.keys(Pages)[0];
      history.pushState(null, null, `/#/${currentPage}/`);
    } else {
      const match = dataUrl.match(/^\/(\w+)(\/)?/);
      const keyPage = match && match[1];
      currentPage = keyPage && Pages[keyPage] ? keyPage : "erro";
    }

    return currentPage;
  }

  // Obtém a página atual
  return getCurrentPage();
}


/**
 * Função que cria uma versão com debounce de uma função fornecida.
 * @param {Function} fn - Função a ser executada com debounce.
 * @param {number} delay - Tempo em milissegundos para aguardar antes de executar a função.
 * @returns {Function} - Função com debounce.
 */
function debounce(fn, delay) {
  let timeoutId;

  /**
   * Função com debounce que será executada após o tempo de atraso especificado.
   * @param {...*} args - Argumentos passados para a função.
   */
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}




/**
 * Renderiza uma página de erro com links para as páginas disponíveis.
 * @param {Object} Pages - Objeto que mapeia URLs para funções de renderização de páginas.
 */
function erroPage(Pages) {
  /**
   * Renderiza a página de erro no elemento ROOT do DOM.
   * @private
   */
  function renderErrorPage() {
    ROOT.innerHTML = `
      <div class="erroPages">
        ${Object.keys(Pages).map((page, index) => `<a class="pagina-erro" id="${index}"  data-href="/#/${page}/">${page.toUpperCase()}</a>`).join("")}
      </div>
    `;
  }

  // Renderiza a página de erro
  renderErrorPage();
}




/**
 * Cria um roteador para manipulação de navegação entre páginas.
 * @param {Object} Pages - Objeto que mapeia URLs para funções de renderização de páginas.
 */
function Router(Pages) {
  /**
   * Verifica o estado da URL atual e renderiza a página correspondente.
   * @private
   */
  function routerState() {
    const selectedPage = stateURL(Pages);
    if (selectedPage) {
      render(Pages, selectedPage);
    }
  }

  /**
   * Manipula o evento de clique em links com o atributo 'data-href',
   * atualiza a URL e renderiza a página correspondente.
   * @private
   * @param {Event} e - Evento de clique.
   */
  function handleClick(e) {
    if (e.target.matches("[data-href]")) {
      e.preventDefault();
      const href = e.target.dataset.href;
      history.pushState(null, null, href);
      routerState();
    }
  }

  // Adiciona um ouvinte de evento 'popstate' para manipular o retorno de histórico
  window.addEventListener("popstate", routerState);

  // Adiciona um ouvinte de evento de clique no corpo do documento com uma função debounce
  document.body.addEventListener("click", debounce(handleClick, 200));

  // Executa o estado inicial do roteador
  routerState();
}




/**
 * Função para selecionar elementos do DOM e renderizar valores.
 * @param {string} props - Seletor CSS para identificar o elemento no DOM.
 * @param {string} [valorArederizar] - Valor a ser renderizado no elemento selecionado.
 * @returns {HTMLElement} - Elemento DOM selecionado.
 */
window.$ = (props, valorArederizar) => {
  if (valorArederizar) {
    document.querySelector(props).innerHTML = valorArederizar;
  }
  return document.querySelector(props);
};


/**
 * Função para selecionar vários elementos do DOM e renderizar valores.
 * @param {Object} options - Objeto que mapeia seletores CSS para valores a serem renderizados.
 * @returns {NodeListOf<HTMLElement>} - Lista de elementos DOM selecionados.
 */
window.$$ = (options) => {
  const selectors = Object.keys(options);
  const contents = Object.values(options);

  const elements = document.querySelectorAll(selectors);

  elements.forEach((element, index) => {
    const content = contents[index];

    if (content) {
      element.innerHTML = content;
    }
  });

  return elements;
};

/**
 * Função para selecionar vários elementos do DOM e adicionar um valor ao conteúdo existente.
 * @param {string} props - Seletor CSS para identificar os elementos no DOM.
 * @param {string} [valorArederizar] - Valor a ser adicionado ao conteúdo dos elementos selecionados.
 * @returns {NodeListOf<HTMLElement>} - Lista de elementos DOM selecionados.
 */
window.$$$ = (props, valorArederizar) => {
  const elements = document.querySelectorAll(props);

  if (valorArederizar) {
    elements.forEach((element) => {
      element.innerHTML += valorArederizar;
    });
  }

  return elements;
};


export default Router


