const ebpValidator = {
  nome: {
    required: "Este campo é obrigatório!",
  },
  preco: {
    required: "Este campo é obrigatório!",
  },
  descricao: {
    required: "Este campo é obrigatório!",
  },
  estoque: {
    required: "Este campo é obrigatório!",
    pattern: {
      value: /[0-9]+$/,
      message: "Digite somente números!",
    },
  },
};

export default ebpValidator;
