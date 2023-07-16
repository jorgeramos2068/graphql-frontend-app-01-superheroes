import { useQuery } from '@apollo/client';

import { Superheroes } from './components/Superheroes';
import { Search } from './components/Search';
import { AddSuperhero } from './components/AddSuperhero';
import { ALL_SUPERHEROES } from './graphql';
import logo from './logo.svg';
import './App.css';

function App() {
  const { data, error, loading } = useQuery(ALL_SUPERHEROES);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {loading && <div>Loading GraphQL data</div>}
          {error && <div>There was an error while loading data</div>}
          {data && <Superheroes superheroes={data.allSuperheroes} />}
        </div>
        <Search />
        <hr />
        <AddSuperhero />
      </header>
    </div>
  );
}

export default App;
