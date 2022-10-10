import { getParsedFileContentBySlug, renderMarkdown } from '@domsmith/markdown';
import { readdirSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote } from 'next-mdx-remote';
import Youtube from '../../../../libs/shared/mdx-elements/src/lib/youtube/youtube';
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const FOLDER = '_articles';
const POSTS_PATH = join(process.cwd(), FOLDER);

const mdxElements = {
  Youtube,
};

export function Article({ frontmatter, content }: ArticleProps) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h3>Visiting, {frontmatter?.author?.name}</h3>
      <hr />
      <MDXRemote {...content} components={mdxElements} />
    </div>
  );
}
export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}: {
  params: ArticleProps;
}): Promise<any> => {
  //1. parse the content of our markdown and separate it into frontmatter and content

  const parseMarkdownFile = getParsedFileContentBySlug(params.slug, POSTS_PATH);

  //2.  Convert markdown content => html

  const markdownContent = await renderMarkdown(parseMarkdownFile.content);

  return {
    props: {
      frontmatter: parseMarkdownFile.frontMatter,
      content: markdownContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.md?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
