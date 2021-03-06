const initialState = {
  usuarios: {
    active: null,
    list: ["João", "Pedro", "Manuela", "Joana"],
  },
};
const usuariosReducer = (state = initialState.usuarios, action) => {
  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      active: action.payload,
    };
  }
  return state;
};

export default usuariosReducer;
