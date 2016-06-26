/* eslint-disable */

export default (state = { x: 0, y: 0 }, action) => {
  switch (action.type) {
    case 'INC_X':
      return { x: state.x + 1, y: state.y };
    case 'INC_Y':
      return { x: state.x, y: state.y + 1 };
  }
};
