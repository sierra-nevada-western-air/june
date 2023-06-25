import type IAction from "./IAction";
import { ApplicationAction } from "./ApplicationAction";

export function logOutAction(): IAction {
  return {
    type: ApplicationAction.LogOut,
  };
}
