
const capitalize = (string) => {
if (typeof string === "string") {
  return string[0].toUpperCase() + string.substring (1);
  } else return "*err*";

}

//console.log (capitalize (1));
module.exports = capitalize
