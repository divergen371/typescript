import { program } from "commander";
import { md2html } from "./md2html.js";
import * as fs from "node:fs/promises";

program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOpts = {
  gfm: false,
  ...program.opts(),
};

fs.readFile(filePath, { encoding: "utf8" })
  .then((file) => {
    const html = md2html(file, cliOpts);
    console.log(html);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
