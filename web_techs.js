const fff = ["HTML", "CSS", "JavaScript", "recat", "redux"];
const indexx = fff.indexOf("Sass");
if (indexx !== -1) {
  console.log("Sass is a preprocess");
} else {
  fff.push("Sass");
  console.log(fff);
}
