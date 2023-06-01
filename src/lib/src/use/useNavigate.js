import useGetModules from "./useGetModules.js"

export default async function useNavigate(props) {
  const pages = await useGetModules("../../../pages/index.js")
  const ROOT = document.querySelector("#app")
  history.pushState(null, null, `/#/info/${e.target.id}`)

}
