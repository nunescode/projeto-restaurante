const cfValidator = {
  nome: {
    required: "Campo obrigatório!",
    minLength: {
      value: 2,
      message: "Mínimo: 2 caracteres!",
    },
    maxLength: {
      value: 80,
      message: "Máximo: 80 caracteres!",
    },
    pattern: {
      value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      message: "Digite somente letras!",
    },
  },

  cpf: {
    required: "Campo obrigatório!",
    maxLength: {
      value: 14,
      message: "Máximo: 14 caracteres!",
    },
    pattern: {
      value: /[0-9]+$/,
      message: "Digite somente números!",
    },
  },
  telefone: {
    maxLength: {
      value: 16,
      message: "Máximo: 16 caracteres!",
    },
    pattern: {
      value: /[0-9]+$/,
      message: "Digite apenas números!",
    },
  },
  apartamento: {
    required: "Campo obrigatório!",
    maxLength: {
      value: 1,
      message: "Máximo: 1 caractere!",
    },
    pattern: {
      value: /[0-9]+$/,
      message: "Digite apenas números!",
    },
  },
};

export default cfValidator;
