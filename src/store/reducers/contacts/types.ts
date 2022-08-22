import { IContact } from "./../../../models/IContact";

export interface ContactState {
  contact: IContact[];
}

export enum ContactActionEnum {
  SET_CONTACT = "SET_CONTACT",
  DELETE_CONTACT = "DELETE_CONTACT",
  EDIT_CONTACT = "EDIT_CONTACT",
  SEARCH_CONTACT = "SEARCH_CONTACT",
}

export interface SetContactAction {
  type: ContactActionEnum.SET_CONTACT;
  payload: IContact[];
}

export interface DeleteContactAction {
  type: ContactActionEnum.DELETE_CONTACT;
  payload: number;
}

export interface EditContactAction {
  type: ContactActionEnum.EDIT_CONTACT;
  payload: IContact;
}

export type ContactAction =
  | SetContactAction
  | DeleteContactAction
  | EditContactAction;
