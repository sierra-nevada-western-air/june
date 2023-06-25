import applicationReducer from "./ApplicationReducer";
import {
  defaultApplicationState,
  type ApplicationState,
} from "./ApplicationState";
import { logOutAction, type ApplicationAction, logInAction } from "./actions";

describe("applicationReducer", () => {
  it("has correct default state", () => {
    const result = applicationReducer(defaultApplicationState, {
      type: 999 as ApplicationAction,
    });

    expect(result).toStrictEqual(defaultApplicationState);
  });

  it("has correct logIn state", () => {
    const result = applicationReducer(
      defaultApplicationState,
      logInAction("mike", "123")
    );

    expect(result.accessToken).toStrictEqual("123");
    expect(result.user).toStrictEqual("mike");
    expect(result.isLoggedIn).toBeTruthy();
  });

  it("has correct logout state", () => {
    const state: ApplicationState = {
      isLoggedIn: true,
      user: "user",
      accessToken: "123",
    };

    const result = applicationReducer(state, logOutAction());

    expect(result).toStrictEqual(defaultApplicationState);
  });
});
