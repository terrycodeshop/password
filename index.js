//define default symbols
const defaultSymbols = "!@#$%^&*().,;?/-[]|";

//initialize the global config to default values
var config = {
  minLength: 8,
  minUpper: 1,
  minLower: 1,
  minDigit: 1,
  minSymbol: 1,
  tplLength: "Password must be at least # characters long.",
  tplUpper: "Password must contain at least # uppercase characters.",
  tplLower: "Password must contain at least # lowercase characters.",
  tplDigit: "Password must contain at least # digits.",
  tplSymbol: "Password must contain at least # symbols.",
  tplInvalid: "Password contains # invalid characters",
  symbols: defaultSymbols,
};

function getConfig() {
  return { ...config };
}

function setConfig(newConfig = {}) {
  //set config values if they exist in passed config
  if (newConfig.minLength !== undefined) config.minLength = newConfig.minLength;
  if (newConfig.minUpper !== undefined) config.minUpper = newConfig.minUpper;
  if (newConfig.minLower !== undefined) config.minLower = newConfig.minLower;
  if (newConfig.minDigit !== undefined) config.minDigit = newConfig.minDigit;
  if (newConfig.minSymbol !== undefined) config.minSymbol = newConfig.minSymbol;
  if (newConfig.tplLength !== undefined) config.tplLength = newConfig.tplLength;
  if (newConfig.tplUpper !== undefined) config.tplUpper = newConfig.tplUpper;
  if (newConfig.tplLower !== undefined) config.tplLower = newConfig.tplLower;
  if (newConfig.tplDigit !== undefined) config.tplDigit = newConfig.tplDigit;
  if (newConfig.tplSymbol !== undefined) config.tplSymbol = newConfig.tplSymbol;
  if (newConfig.tplInvalid !== undefined)
    config.tplInvalid = newConfig.tplInvalid;
  if (newConfig.Symbols !== undefined) config.Symbols = newConfig.Symbols;
}

function countPassword(value = "") {
  //initialize results object
  results = {};
  results.length = value.length;
  results.upper = 0;
  results.lower = 0;
  results.digit = 0;
  results.symbol = 0;
  results.invalid = 0;

  //loop counting character types
  value.split("").map((c) => {
    if (c >= "a" && c <= "z") results.lower++;
    else if (c >= "A" && c <= "Z") results.upper++;
    else if (c >= "0" && c <= "9") results.digit++;
    else if (config.symbols.indexOf(c) >= 0) results.symbol++;
    else results.invalid++;
  });

  //return result counters
  return results;
}

function formatMessage(message, value) {
  return message.replace("#", value.ToString);
}

//scan password and return aerrors in an array
function validPassword(password = "") {
  //use the count password function to count character types
  let results = countPassword(password);

  //initialize error array
  let errors = [];

  //ensure the password meets the minimum length
  if (results.length < config.minLength)
    errors.push(formatMessage(config.tplLength, config.minLength));

  //ensure password contains minimum uppercase letters
  if (results.upper < config.minUpper)
    errors.push(formatMessage(config.tplUpper, config.minUpper));

  //ensure password contains minimum lowercase letters
  if (results.lower < config.minLower)
    errors.push(formatMessage(config.tplLower, config.minLower));

  //ensure password contains minimum digits
  if (results.digit < config.minDigit)
    errors.push(formatMessage(config.tplDigit, config.minDigit));

  //ensure password contains minimum symbols
  if (results.symbol < config.minSymbol)
    errors.push(formatMessage(config.tplSymbol, config.minSymbol));

  //ensure password contains no invalid characters
  if (results.invalid > 0)
    errors.push(formatMessage(config.tplInvalid, results.invalid));

  //return the array of error messages
  return errors;
}

module.exports = {
  getConfig: getConfig,
  setConfig: setConfig,
  count: countPassword,
  valid: validPassword,
};
