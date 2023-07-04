async function imgfetch(props) {
  const state = async () => {
    if (!props.attributes.urlSrc) {
      return;
    }

    
    try {
      const response = await fetch(props.attributes.urlSrc);
      if (response.ok) {
        const blob = await response.blob();
        const imageUrlObject = URL.createObjectURL(blob);
        const img = document.createElement('img');
        img.src = imageUrlObject;
        img.alt = 'Dados Usuários';
        prix.$(props.nameTag).appendChild(img);
      } else {
        console.error('Erro na solicitação da imagem');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  return { state };
}
