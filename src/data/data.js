export default async function data() {
  const params = {
    url: "https://script.google.com/macros/s/AKfycbyKU9OcJSJ0RrCvwGnRXkwGOUkKVYr4epjnNSwSvreRdWvPZG7RGSe5KeNkP20HyFtg5g/exec",
    method: {},
    useType: "json",
    cacheDuration: 0
  };

    
  const dadosP = await useApi(params);

  const dadosC = await useCSVToJSON(
    "../../src/public/data/colaboradores/colaboradores.csv"
  );
  const data = {
    dadosC,
    dadosP,
  };
  return data;
}



