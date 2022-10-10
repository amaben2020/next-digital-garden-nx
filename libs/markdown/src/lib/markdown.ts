import { readFileSync } from "fs";

import * as matter from "gray-matter";
import { join } from "path";

export function getParsedFileContentBySlug(fileName: string, postPath: string) {


  // Getting the filepath of the markdown file
  const postFilePath = join(postPath, `${fileName}.md`)

  // reading it

  const info = readFileSync(postFilePath)
  const { data, content } = matter(info)
  return {
    frontMatter: data,
    content
  }
}


export function renderMarkdown(): string {
  return 'markdown';
}


