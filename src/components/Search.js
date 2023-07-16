import { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

export const Search = () => {
  const FIND_SUPERHERO = gql`
    query findSuperhero($idToSearch: ID!) {
      findSuperhero(id: $idToSearch) {
        id
        name
        phone
        address {
          street
          city
        }
      }
    }
  `;

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
        <input name="id" autoComplete="off" onChange={handleInputChange} />
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
