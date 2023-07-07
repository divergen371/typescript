import { marked } from "marked";

export function md2html(markdown, cliOpts) {
  return marked.parse(markdown, {
    gfm: cliOpts.gfm,
  });
}
