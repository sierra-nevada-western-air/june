import { ValueDefaults } from "@/features/common";

export interface ApplicationState {
  user: string;
  accessToken: string;
  isLoggedIn: boolean;
}

export const defaultApplicationState: ApplicationState = {
  user: ValueDefaults.String,
  accessToken: ValueDefaults.String,
  isLoggedIn: ValueDefaults.Boolean,
};
