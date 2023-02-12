import React, { useEffect, useState, useCallback } from 'react';
import { Pokemon } from '@appone/shared-types';

import styles from './index.module.css';

export function Index({
  q,
  pokemon: initialPokemon,
}: {
  q: string;
  pokemon: Pokemon[];
}) {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3333/search?q=${escape(search)}`)
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, [search]);

  const onSetSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(evt.target.value);
    },
    []
  );

  return (
    <div className={styles.page}>
      <input value={search} onChange={onSetSearch} />
      <ul>
        {pokemon.map(({ id, name: { english } }) => (
          <li key={id}>{english}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  let pokemon = [];
  if (context.query.q) {
    const res = await fetch(
      `http://localhost:3333/search?q=${context.query.q}`
    );

    pokemon = await res.json();
  }

  return {
    props: {
      q: context.query.q ?? '',
      pokemon,
    },
  };
}
export default Index;
