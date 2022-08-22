import { IUser } from "./../models/IUser";
import axios, { AxiosResponse } from "axios";
import { IContact } from "../models/IContact";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>("./db-1660889843883.json");
  }

  static async getContact(): Promise<AxiosResponse<IContact[]>> {
    return axios.get<IContact[]>("./db-1660889843883.json");
  }
}
