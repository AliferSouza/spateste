export default async function Whatsapp() {

  const html = () => {
    return `
    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=553171685900&text=OI" target="_blank">
    <img src="./src/public/img/icones/whats.png" width="40px" height="40px" alt="whatsapp">
   </a>
`
  }
  return {
    
    html
  }


}