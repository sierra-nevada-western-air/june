import type IPayloadAction from "./IPayloadAction";
import { ApplicationAction } from "./ApplicationAction";

export interface LogInPayload {
  user: string;
  accessToken: string;
}

export function logInAction(
  user: string,
  accessToken: string
): IPayloadAction<LogInPayload> {
  return {
    type: ApplicationAction.LogIn,
    payload: {
      user,
      accessToken,
    },
  };
}
