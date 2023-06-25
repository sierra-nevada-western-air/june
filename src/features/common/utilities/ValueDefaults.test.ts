import { ValueDefaults } from "./ValueDefaults";

describe("valueDefaults", () => {
  it("string has correct value", () => {
    expect(ValueDefaults.String).toStrictEqual("");
  });

  it("boolean has correct value", () => {
    expect(ValueDefaults.Boolean).toBeFalsy();
  });

  it("date as correct value", () => {
    const date = new Date();

    expect(ValueDefaults.Date.getMonth()).toStrictEqual(date.getMonth());
    expect(ValueDefaults.Date.getFullYear()).toStrictEqual(date.getFullYear());
    expect(ValueDefaults.Date.getDay()).toStrictEqual(date.getDay());
  });

  it("array has correct value", () => {
    expect(ValueDefaults.Array<number>()).toStrictEqual(new Array<number>());
  });
});
