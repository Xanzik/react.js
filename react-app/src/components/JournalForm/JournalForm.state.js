export const INITIAL_STATE = {
  isValid: {
    post: true,
    title: true,
    date: true,
  },
  values: {
    post: "",
    title: "",
    tag: "",
    date: "",
  },
  isFormReadyToSubmit: false,
};

export function formReducer(state, action) {
  switch (action.type) {
    case "RESET_VALIDITY":
      return { ...state, isValid: INITIAL_STATE.isValid };
    case "SET_VALUE":
      return { ...state, values: { ...state.values, ...action.payload } };
    case "SUBMIT": {
      const titleValidaty = state.values.title?.trim().length;
      const postValidaty = state.values.post?.trim().length;
      const dateValidaty = state.values.date;
      return {
        ...state,
        isValid: {
          post: postValidaty,
          title: titleValidaty,
          date: dateValidaty,
        },
        isFormReadyToSubmit: postValidaty && titleValidaty && dateValidaty,
      };
    }
    case "RESET":
      return INITIAL_STATE;
  }
}
