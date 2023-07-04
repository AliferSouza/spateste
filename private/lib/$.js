const $ = (selector, props) => {
    const elements = document.querySelectorAll(selector);
  
    if (props === "document") {
      return elements;
    }
  
    if (elements.length === 0) {
      return selector;
    }
  
    const obj = {
      addClass: (className) => {
        elements.forEach((element) => {
          element.classList.add(className);
        });
        return obj;
      },
  
      removeClass: (className) => {
        elements.forEach((element) => {
          element.classList.remove(className);
        });
        return obj;
      },
  
      text: (textContent) => {
        elements.forEach((element) => {
          element.textContent = textContent;
        });
        return obj;
      },
  
      css: (styleObject) => {
        elements.forEach((element) => {
          Object.assign(element.style, styleObject);
        });
        return obj;
      },
  
      on: (event, handler) => {
        elements.forEach((element) => {
          element.addEventListener(event, handler);
        });
        return obj;
      },
  
      appendImage: (imageUrl) => {
        elements.forEach((element) => {
          const img = document.createElement("img");
          img.src = imageUrl;
          element.appendChild(img);
        });
        return obj;
      },
    };
  
    return obj;
  }