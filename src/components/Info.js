export default async function Info(){
     return `
    <input type="text" oninput="document.getElementById('meuSpan').innerHTML = this.value;" value="">
    <span id="meuSpan"></span>
    `
}