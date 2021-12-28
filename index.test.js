//load the password module
const password = require("./index.js");

//make backup copy of default config properties
backup = { ...password.getConfig() };

test("test the getConfig function", () => {
  //get the current configuration
  let c = password.getConfig();

  //validate current configuration is defaults
  expect(c.minLength).toEqual(8);
  expect(c.minUpper).toEqual(1);
  expect(c.minLower).toEqual(1);
  expect(c.minDigit).toEqual(1);
  expect(c.minSymbol).toEqual(1);
});
