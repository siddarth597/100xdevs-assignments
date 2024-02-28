const fs = require("fs");

function writeToFile(contents, filepath) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, contents, { encoding: "utf-8" }, (err) => {
      if (err) reject(err);
      resolve("Done");
    });
  });
}

function readFromFile(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

(async () => {
  const data = await readFromFile("./file-cleaner-test.txt");
  console.log(data);

  let dataStr = new String(data);

  //   while (dataStr.includes("  ")) {
  //     dataStr = dataStr.replace("  ", " ");
  //   }

  dataStr = dataStr.replace(/\s+/g, " ");

  console.log(dataStr);

  await writeToFile(dataStr, "./file-cleaner-test.txt");
})();
