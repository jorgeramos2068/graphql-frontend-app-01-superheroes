import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import { FIND_SUPERHERO } from '../graphql';

export const Search = () => {
  const [id, setId] = useState('');
  const [getSuperhero, result] = useLazyQuery(FIND_SUPERHERO);
  const { data, error, loading } = result;

  const handleInputChange = e => {
    if (e.target.value) {
      setId(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      getSuperhero({ variables: { idToSearch: id } });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Search by id</p>
        <input
          name="id"
          type="text"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {loading && <div>Loading Superhero data</div>}
        {error && <div>There was an error while loading data</div>}
        {data && <div>Found: {data.findSuperhero?.name}</div>}
      </div>
    </div>
  );
};

export default Search;
