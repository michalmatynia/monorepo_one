import { useEffect } from 'react';
import styles from './index.module.css';

export function Index() {
  useEffect(() => {
    fetch(`http://localhost:3333/search?q=${escape(search)}`)
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, [search]);

  // let kg = 'foo';
  // let kdg = 'fsf';

  return <div className={styles.page}></div>;
}

export default Index;
function setPokemon(data: any): any {
  throw new Error('Function not implemented.');
}
