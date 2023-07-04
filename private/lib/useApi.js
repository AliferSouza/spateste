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