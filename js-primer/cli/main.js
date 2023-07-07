import { program } from "commander";
import { marked } from "marked";
import * as fs from "node:fs/promises";

program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const opts = program.opts();
const cliOpts = {
  gfm: opts.gfm ?? false,
};

fs.readFile(filePath, { encoding: "utf8" })
  .then((file) => {
    const html = marked.parse(file, {
      gfm: cliOpts.gfm,
    });
    console.log(html);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
