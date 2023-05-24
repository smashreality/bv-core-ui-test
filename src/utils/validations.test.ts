import { phoneRegEx, websiteUrlRegEx, validationMessage } from "./validations";
describe("phoneRegEx", () => {
  it("matches valid phone numbers", () => {
    const result = phoneRegEx.test("+1 (555) 555-5555");
    expect(result).toBe(true);
  });

  it("does not match invalid phone numbers", () => {
    const result = phoneRegEx.test("555-555-5555");
    expect(result).toBe(false);
  });
});

describe("websiteUrlRegEx", () => {
  it("matches valid website URLs", () => {
    const result = websiteUrlRegEx.test("https://www.example.com");
    expect(result).toBe(true);
  });

  it("does not match invalid website URLs", () => {
    const result = websiteUrlRegEx.test("example");
    expect(result).toBe(false);
  });
});

describe("validationMessage", () => {
  it("returns error message for the given field", () => {
    const result = validationMessage("phone number");
    expect(result).toBe("phone number is a required field");
  });
});
