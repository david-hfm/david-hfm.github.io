function binaryToDecimal(binaryString) {
  let positionalValue = 1;
  let result = 0;
  for (let i = binaryString.length - 1; i >= 0; i--) {
    if (binaryString[i] === "1") {
      result += positionalValue;
    }
    positionalValue *= 2;
  }
  return result;
}
