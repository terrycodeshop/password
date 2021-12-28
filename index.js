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

module.exports = { getConfig: getConfig, setConfig: setConfig };
