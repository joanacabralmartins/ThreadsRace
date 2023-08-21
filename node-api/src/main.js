function buscarNumero(numero) {
  const iteracoes = 100000000;
  for (let i = 0; i < iteracoes; i++) {
    if (i === numero) {
      return i;
    }
  }
  return null;
}


