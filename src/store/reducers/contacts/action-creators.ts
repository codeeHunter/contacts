import { AppDispatch } from "./../../index";
import {
  ContactActionEnum,
  DeleteContactAction,
  EditContactAction,
  SetContactAction,
} from "./types";
import { IContact } from "../../../models/IContact";
import UserService from "../../../api/UserService";

export const ContactActionCreators = {
  setContact: (payload: IContact[]): SetContactAction => ({
    type: ContactActionEnum.SET_CONTACT,
    payload,
  }),

  deleteContact: (payload: number): DeleteContactAction => ({
    type: ContactActionEnum.DELETE_CONTACT,
    payload,
  }),

  editContact: (payload: IContact): EditContactAction => ({
    type: ContactActionEnum.EDIT_CONTACT,
    payload,
  }),

  fetchContact: () => async (dispatch: AppDispatch) => {
    const response = await UserService.getContact();
    dispatch(ContactActionCreators.setContact(response.data));
  },
};
