import { isValidToken } from "./jwt";

describe("isValidToken", () => {
  it("returns false for an empty token", () => {
    const result = isValidToken("");
    expect(result).toBe(false);
  });

  it("returns false for an expired token", () => {
    const expiredToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDAwMDAwMDAsImlhdCI6MTUwMDAwMDAwMH0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const result = isValidToken(expiredToken);
    expect(result).toBe(false);
  });

  it("returns true for a valid token", () => {
    const validToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjMwMDAwMDAwMDAsImlhdCI6MTQ5OTkwMDAwMH0.bO90p4hxGqiZjPMLltwU9Hx7IVMLvNvpSgwKfITXVZ4";
    const result = isValidToken(validToken);
    expect(result).toBe(true);
  });
});
