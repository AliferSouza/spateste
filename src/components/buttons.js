import { useAlifer } from "../lib/index.js";

export default async function buttons(props) {
  const tag = document.querySelector(props.nameTag);
  const [get, setCount] = useAlifer(0);

  tag.addEventListener("click", (e) => {
    const operation = e.target.textContent === "+" ? 1 : -1;
    const newValue = get() + operation;
    if (newValue >= 0) {
      setCount(newValue, `count-${props.i}`);
    }
  });

  return `
    <div class="container">
      <button class="btn-2 custom-btn">+</button>
      <div count-${props.i}>${get()}</div>
      <button class="btn-2 custom-btn">-</button>
    </div>
  `;
}
