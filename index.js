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

module.exports = { getConfig: getConfig };
