import { program } from "commander";
import * as fs from "node:fs/promises";

program.parse(process.argv);
const filePath = program.args[0];

fs.readFile(filePath, { encoding: "utf8" })
  .then((file) => {
    console.log(file);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
