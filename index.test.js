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

test("Test the password.count function", () => {
  //count characters for a totally valid password
  let result = password.count("Ab0!5678");
  expect(result.length).toEqual(backup.minLength);
  expect(result.upper).toEqual(backup.minUpper);
  expect(result.lower).toEqual(backup.minLower);
  //expect(result.digit).toEqual(backup.minDigit);
  expect(result.symbol).toEqual(backup.minSymbol);
});

test("Test the validPassword function", () => {
  //test empty password
  let errors = password.valid("");
  expect(errors.length).toEqual(5);

  //test password not long enough
  errors = password.valid("Ab1@234");
  expect(errors.length).toEqual(1);

  //test no upper case letters
  errors = password.valid("abcd@123");
  expect(errors.length).toEqual(1);

  //test no lower case letters
  errors = password.valid("ABCD@123");
  expect(errors.length).toEqual(1);

  //test no digits
  errors = password.valid("Abcd@abc");
  expect(errors.length).toEqual(1);

  //test no symbols
  errors = password.valid("Abcd1234");
  expect(errors.length).toEqual(1);

  //test no errors
  errors = password.valid("Abc@1234");
  expect(errors.length).toEqual(0);
});

test("Test the checkPassword function", () => {
  //test empty password
  let ok = password.check("");
  expect(ok).toEqual(false);

  //test password not long enough
  ok = password.check("Ab1@234");
  expect(ok).toEqual(false);

  //test no upper case letters
  ok = password.check("abcd@123");
  expect(ok).toEqual(false);

  //test no lower case letters
  ok = password.check("ABCD@123");
  expect(ok).toEqual(false);

  //test no digits
  ok = password.check("Abcd@abc");
  expect(ok).toEqual(false);

  //test no symbols
  ok = password.check("Abcd1234");
  expect(ok).toEqual(false);

  //test no errors
  ok = password.check("Abc@1234");
  expect(ok).toEqual(true);
});
