import { ContactAction, ContactActionEnum, ContactState } from "./types";

const initialState: ContactState = {
  contact: [],
};

export default function ContactReducer(
  state = initialState,
  action: ContactAction
): ContactState {
  switch (action.type) {
    case ContactActionEnum.SET_CONTACT:
      return { ...state, contact: action.payload };

    case ContactActionEnum.DELETE_CONTACT:
      return {
        ...state,
        contact: state.contact.filter((item) => item.id !== action.payload),
      };

    case ContactActionEnum.EDIT_CONTACT:
      return {
        ...state,
        contact: state.contact.map((item) => {
          if (action.payload.id === item.id) {
            item.email = action.payload.email;
            item.username = action.payload.username;
          }
          return item;
        }),
      };

    default:
      return state;
  }
}
