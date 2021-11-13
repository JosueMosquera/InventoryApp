import { types } from "../types/types";
import avatar from '../assets/undraw_male_avatar_323b.svg'
export const AuthReducer = (state = {}, action,image_url=avatar) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayname,
        email: action.payload.email,
        image_url:action.payload.image_url||avatar
      };
      case types.logout:
          return{};
    default:
      return state;
  }
};
