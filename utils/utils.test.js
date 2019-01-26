const expect = require("expect");

const utils = require("./utils");

it("should add two number", () => {
  const res = utils.add(33, 11);

  expect(res)
    .toBe(44)
    .toBeA("number");
});

it("should square number", () => {
  const res = utils.square(10);

  expect(res)
    .toBe(100)
    .toBeA("number");
});

it("should verify first and last names are set", () => {
  const expected = {
    age: 12,
    firstName: "John",
    lastName: "Doe"
  };

  const mock = {
    age: 12
  };

  const user = utils.setName(mock, "John Doe");

  expect(user).toEqual(expected);
  expect(user).toInclude({
    firstName: "John",
    lastName: "Doe"
  });
});
