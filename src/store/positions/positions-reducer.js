import { ADD_POSITIONS } from "./positions-actions";

export function positionReducer(state = [], action) {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.positions;
    }

    default: {
      return state;
    }
  }
}
