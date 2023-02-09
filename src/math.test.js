//! node module import formati
const {
  calculateTotal,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  fibonacci,
} = require("./math");

//! ES6 module formati
// import {
//   calculateTotal,
//   fahrenheitToCelsius,
//   celsiusToFahrenheit,
//   fibonacci,
// } from "./math";

describe("calculateTotal", () => {
  //test caselerii olusturuyoruz
  it("should exist", () => {
    expect(calculateTotal).toBeDefined;
  });

  it("should return a number", () => {
    expect(calculateTotal(100, 0.2)).toBe(120);
  });

  it("should return with default VAT", () => {
    expect(calculateTotal(200)).toBe(236);
  });
});
describe("celsiusToFahrenheit", () => {
  it("should exist", () => {
    expect(celsiusToFahrenheit).toBeDefined();
  });

  it("should return a number", () => {
    expect(celsiusToFahrenheit(10)).toBe(50);
  });

  it("should convert 20 C to 68 F", () => {
    expect(celsiusToFahrenheit(20)).toBe(68);
  });
});
describe("fahrenheitToCelsius", () => {
  //
});
describe("fibonacci", () => {
  //
});
