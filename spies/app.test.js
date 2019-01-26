const expect = require("expect");

const app = require("./app");
const db = require("./db");

describe("App", () => {
  it("should call the spy correctly", () => {
    const spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it("should call saveUser with user object", () => {
    const email = "andrew@example.com";
    const password = "123123123";

    const spy = expect.spyOn(db, "saveUser");
    app.handleSignup(email, password);
    expect(spy).toHaveBeenCalledWith({ email, password });
  });
});
