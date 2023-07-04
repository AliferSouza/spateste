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