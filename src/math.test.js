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
  ///
});
describe("fahrenheitToCelsius", () => {
  //
});
describe("fibonacci", () => {
  //
});
