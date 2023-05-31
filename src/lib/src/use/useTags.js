export default async function useTags() {
  try {
    const module = await import("../../../components/index.js");
    if (module.default) {
      return module.default;
    } else {
      throw new Error("O módulo não foi carregado corretamente");
    }
  } catch (error) {
    console.error("Erro ao importar o módulo:", error);
    return null;
  }
}
