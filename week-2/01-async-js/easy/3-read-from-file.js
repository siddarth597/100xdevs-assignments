const fs = require("fs");

function readFromFile(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

(async () => {
  const data = await readFromFile("./3-read-from-file.md");
  console.log(data);
})();
