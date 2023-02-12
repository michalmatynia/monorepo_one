import styles from './index.module.css';

// apps/site/pages/about.tsx
import { GetStaticProps } from 'next';

export interface AboutProps {
  name: string;
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'Juri',
    },
  };
};

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to {props.name}</h1>
    </div>
  );
}

export default About;
