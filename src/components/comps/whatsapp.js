export default async function Whatsapp() {
  const style = () =>{
    return`   
    .whatsapp {
      position: fixed;
      bottom: 5px;
      right: 18px;
      width:50px;
      height:50px
      color: red     
    }

    }`
  }

  const html = () => {
    return `
    <a href="https://api.whatsapp.com/send?phone=553171685900&text=OI" target="_blank">
    <img src="./public/img/icones/whats.png" width="40px" height="40px" alt="whatsapp">
   </a>
`
  }
  return {
    style,
    html
  }


}