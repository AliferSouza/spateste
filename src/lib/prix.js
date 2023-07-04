
const usePrix = async (pasta, func) => {
  const url = `${location.origin}/private/${pasta}/${func}` 
 
  try {
    const res = await fetch(url);
    let data = await res.text();
    const returnFunction = Function("return " + data)();
    return await returnFunction
  } catch {
    return null;
  }

}

export { 
  usePrix
};
