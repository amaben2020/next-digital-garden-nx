import { readFileSync } from "fs";

import * as matter from "gray-matter";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize"

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


export function renderMarkdown(markdownContent: string) {
  return serialize(markdownContent || "")
}


