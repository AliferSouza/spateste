import batePapo from "../pages/teste.js";

export default async function mascoteIa(props) {
  const state = () => {
    const a = document.querySelector(props.nameTag);
    const r = document.querySelector("#render");
    a.addEventListener("click", async (e) => {
      if (e.target.id === "comp-mascote") {
        const dadosCom = await batePapo();
        r.innerHTML = dadosCom.html();
        dadosCom.state()
      }
    });
  };

  const html = () => {
    return `
  <a target="_blank" class="mascote-button" id="comp-mascote">
 <img src="./src/img/mascote.png" width="40" id="comp-mascote">
</a>
`;
  };
  return {
    html,
    state,
  };
}
