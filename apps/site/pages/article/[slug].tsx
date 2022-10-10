import { GetStaticProps } from 'next';
import styles from './index.module.css';

export interface ArticleProps {
  slug: string | string[];
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { slug: 'slug1' },
      },
      {
        params: { slug: 'slug2' },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params: { slug },
}): Promise<{ props: { slug: string | string[] } }> => {
  return {
    props: { slug },
  };
};

export function Article(props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Article! {props.slug}</h1>
    </div>
  );
}

export default Article;
