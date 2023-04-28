const techList = (lista, pessoa) => {
  let listaCompleta = [];
  let listaOrdenada = lista.sort();
  try {
    for (let item of listaOrdenada) {
      listaCompleta.push({
        tech: item,
        name: pessoa,
      });
    }
    if (listaCompleta.length === 0) {
      throw new Error('Vazio!');
    } else {
      return listaCompleta;
    }
  } catch (Error) {
    return Error.message;
  }
};

module.exports = techList;
