import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// const initialState = {
//   user: {
//     isLoggedIn: false,
//     user: null,
//     signUpData: {},
//     loginData: {},
//   },
//   post: {
//     mainPosts: [],
//   },
// };

// action creator
// export const loginAction = (data) => {
//   return {
//     type: "LOG_IN",
//     data,
//   };
// };

// export const logoutAction = () => {
//   return {
//     type: "LOG_OUT",
//   };
// };

// combineReducer를 통해서 user,post의 initialStater값을 알아서 합쳐서 넣어줌
const rootReducer = combineReducers({
  // 리덕스 사버 사이드 렌더링 때문에 HYDRATE를 위해 리듀서를 추가한 것
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case HYDRATE:
//       console.log("HYDRATE", action);
//       return { ...state, ...action.payload };
//     case "LOG_IN":
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           isLoggedIn: true,
//           user: action.data,
//         },
//       };
//     case "LOG_OUT":
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           isLoggedIn: false,
//           user: null,
//         },
//       };
//     default:
//       return state;
//   }
// };

export default rootReducer;
