function binarioParaDecimal(stringBinario) {
  let valorPosicional = 1;
  let resultado = 0;
  for (let i = stringBinario.length - 1; i >= 0; i--) {
    if (stringBinario[i] === "1") {
      resultado += valorPosicional;
    }
    valorPosicional *= 2;
  }
  return resultado;
}
