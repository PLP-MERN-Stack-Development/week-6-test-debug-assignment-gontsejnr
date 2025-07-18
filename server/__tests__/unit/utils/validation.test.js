// server/src/__tests__/unit/utils/validation.test.js
const { validateEmail, sanitizeInput } = require("../../../utils/validation");

describe("Validation Utils", () => {
  describe("validateEmail", () => {
    it("should return true for valid email", () => {
      expect(validateEmail("test@example.com")).toBe(true);
      expect(validateEmail("user.name@domain.co.uk")).toBe(true);
    });

    it("should return false for invalid email", () => {
      expect(validateEmail("invalid-email")).toBe(false);
      expect(validateEmail("test@")).toBe(false);
      expect(validateEmail("@domain.com")).toBe(false);
    });
  });

  describe("sanitizeInput", () => {
    it("should trim and lowercase input", () => {
      expect(sanitizeInput("  TEST  ")).toBe("test");
      expect(sanitizeInput("MixedCase")).toBe("mixedcase");
    });
  });
});
