const fs = require("fs");

function writeToFile(contents, filepath) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, contents, { encoding: "utf-8" }, (err) => {
      if (err) reject(err);
      resolve("Done");
    });
  });
}

(async () => {
  let contents = "This is a new file that is now modified";
  let filepath = "./demo.txt";
  await writeToFile(contents, filepath);
})();
