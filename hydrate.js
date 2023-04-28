const hydrate = (string) => {
  let array = string.split('');
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i], 10)) {
      soma += parseInt(array[i], 10);
    }
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  } else {
    return `${soma} copos de água`;
  }
};
module.exports = hydrate;
