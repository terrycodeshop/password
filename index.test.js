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

test("Test the setConfig function", () => {
  //change the minimum length and character counts
  password.setConfig({
    minLength: 10,
    minUpper: 2,
    minLower: 2,
    minDigit: 2,
    minSymbol: 2,
  });

  //get themodified configuration
  let c = password.getConfig();

  //validate current configuration imatches changes
  expect(c.minLength).toEqual(10);
  expect(c.minUpper).toEqual(2);
  expect(c.minLower).toEqual(2);
  expect(c.minDigit).toEqual(2);
  expect(c.minSymbol).toEqual(2);

  //reset the default configuration
  password.setConfig(backup);
});
