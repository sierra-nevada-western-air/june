import { defineStore } from "pinia";
import {
  defaultApplicationState,
  type ApplicationState,
} from "./ApplicationState";
import applicationReducer from "./ApplicationReducer";
import type IAction from "./actions/IAction";
import { useReducer } from "@/features/common";

export const useApplicationStore = defineStore("applicationStore", () => {
  const [state, dispatcher] = useReducer<ApplicationState, IAction>(
    applicationReducer,
    defaultApplicationState
  );

  return { state, dispatcher };
});
