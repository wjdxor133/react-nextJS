export const initialState = {
  mainPosts: [],
};

// 이전 state와 action을 받아서 새로운 state를 돌려준다.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
