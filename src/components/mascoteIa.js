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
  <div class="mascote-button" id="comp-mascote">
 <img src="./src/img/mascote.png" width="40px" height="40px" id="comp-mascote" alt="Mascote">
  </div>
`;
  };
  return {
    html,
    state,
  };
}
