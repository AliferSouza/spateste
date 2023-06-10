import useGetModules from "./useGetModules.js"
import Router from "./Router.js"

export default async function useNavigate(page, rota) {
  const Pages = await useGetModules("../../../pages/index.js")
  history.pushState(null, null, rota)
  Router(page)
}
