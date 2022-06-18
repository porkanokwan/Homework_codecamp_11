// Lab 1
const str = "c:\\Users\\Admin\\Desktop";
console.log(str);

// Lab 2
console.log("Welcome to Thailand".length); // 19
console.log("Don'n be afraid\n".length); // 16
console.log("สวัสดีประเทศไทย".length); // 15
console.log("สวัสดีประเทศไทย"[2]); //  ั

// Lab 3
function ucFirst(str) {
  //   const change = str[0].toUpperCase() + str.substr(1);
  //   const change = str.slice(0, 1).toUpperCase() + str.slice(1);
  //   return change;
  return str.replace(str[0], str[0].toUpperCase());
}

console.log(ucFirst("welcome to Thailand"));

// Lab 4
function checkStr(str) {
  return (
    str.toLowerCase().includes("xxx") ||
    str.toLowerCase().includes("sex") ||
    str.toLowerCase().includes("porn")
  );
}

console.log(checkStr("Hi, xxx icsdasdasdasd"));

// Lab 5
function truncate(str, lengths) {
  if (str.length > lengths) {
    return str.substr(0, lengths - 1) + "..."; // รวม ... แล้ว lehgth ได้ 20
  }
  return str;
}
console.log(truncate("What I'd like to tell on this topic is:", 20));

// Lab 6
function extractCurrencyValue(string, rate) {
  const price = string.slice(1);
  //   console.log(price);
  return "THB " + price * rate;
}

console.log(extractCurrencyValue("$120", 30)); // THB3600
