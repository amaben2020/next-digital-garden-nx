import { readdirSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';

export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const FOLDER = '_articles';
const POSTS_PATH = join(process.cwd(), FOLDER);

export function Article(props: ArticleProps) {
  return (
    <div>
      <h1>Visiting, {props.slug}</h1>
    </div>
  );
}
export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  //1. parse the content of our markdown and separate it into frontmatter and content

  //2.  Convert markdown content => html

  return {
    props: {
      slug: params.slug,
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
