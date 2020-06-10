import ValidatorService from "./ValidatorService.service";

describe("validator service", () => {
  test("value is required - empty value", () =>
    expect(ValidatorService.required("")).toBeFalsy());
  test("value is required - correct value", () =>
    expect(ValidatorService.required("test")).toBeTruthy());
  test("value is email - bad value", () =>
    expect(ValidatorService.isEmail("test")).toBeFalsy());
  test("value is email - correct value", () =>
    expect(ValidatorService.isEmail("test@test.com")).toBeTruthy());
});
