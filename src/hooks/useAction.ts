import { allActionsCreators } from "./../store/reducers/action-reducers";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActionsCreators, dispatch);
};
