export default async function Whatsapp(props) {

const html = () => {
  return`
  <a href="https://api.whatsapp.com/send?phone=553171685900&text=OI" target="_blank" class="whatsapp-button">
 <img src="./src/img/Whatsapp.png" width="40px" height="40px" alt="whatsapp">
</a>
`
}
return {
  html
}


}