const classList = require("./index");

describe("classList", () => {
  const arg1 = "arg1",
    arg2 = "arg2";

  it("When passed a single argument, returns a string with no trailing space", () => {
    expect(classList(arg1)).toMatch(arg1);
  });

  it("When passed multiple arguments, returns a string of arguments", () => {
    expect(classList(arg1, arg2)).toMatch(`${arg1} ${arg2}`);
  });

  it("When passed an undefined argument, returns a string without said argument", () => {
    expect(classList(arg1, undefined, arg2)).toMatch(`${arg1} ${arg2}`);
  });

  it("When passed an argument that evaluates to `false`, returns a string without said argument", () => {
    expect(classList(arg1, 0, arg2)).toMatch(`${arg1} ${arg2}`);
  });
});
