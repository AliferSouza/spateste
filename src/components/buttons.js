

export default async function buttons(props) {
 
let counter = 0



const state = () => {

  const tag = document.querySelector(props.nameTag);
  const counterElement = tag.querySelector("#conter");

  tag.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-2")) {
      const action = e.target.textContent;
      if (action === "+") {
        counter++;
      } else if (action === "-") {
        counter--;
      }
      counterElement.textContent = counter;
    }
  });
};



  const html = () => {
    return `
    <div class="container-bnt">
      <button class="btn-2 custom-btn">+</button>
      <div id="conter">0</div>
      <button class="btn-2 custom-btn">-</button>
    </div>
  `;

  }
  return {
    html,
    state
  }


}
