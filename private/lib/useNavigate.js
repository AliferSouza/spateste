async function useNavigate(Rota, Pages) {
    history.pushState(null, null, Rota);
    Router(Pages);
  }
  
  