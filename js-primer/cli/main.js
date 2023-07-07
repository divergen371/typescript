import { program } from "commander";
import { marked } from "marked";
import * as fs from "node:fs/promises";

program.parse(process.argv);
const filePath = program.args[0];

fs.readFile(filePath, { encoding: "utf8" })
  .then((file) => {
    const html = marked.parse(file);
    console.log(html);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
