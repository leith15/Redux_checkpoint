import { ADD, DELETE, DONE, EDIT } from "../Action/ActionType";

const initialState = {
  taskList: [{ name: "first task", done: false, id: Math.random() }],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, taskList: [...state.taskList, ...action.payload] };

    case DELETE:
      return {
        ...state,
        taskList: state.taskList.filter((el) => el.id !== action.payload),
      };
    case DONE:
      return {
        /* bech nestahfedh 3a state copie */ ...state,
        taskList: state.taskList.map((el) =>
          el.id === action.payload ? { ...el, done: !el.done } : el
        ),
      };
    case EDIT:
      return {
        ...state,
        taskList: state.taskList.map((el) =>
          el.id === action.payload.id
            ? { ...el, name: action.payload.name }
            : el
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
