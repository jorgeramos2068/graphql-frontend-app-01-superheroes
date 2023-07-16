import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_SUPERHERO } from '../graphql';

export const AddSuperhero = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');

  const [createSuperhero, result] = useMutation(ADD_SUPERHERO);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleStreetChange = e => {
    setStreet(e.target.value);
  };

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createSuperhero({ variables: { name, phone, street, city } });
    setName('');
    setPhone('');
    setStreet('');
    setCity('');
  };

  return (
    <div>
      <h2>Create a new Superhero</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <input
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Phone"
        />
        <input
          type="text"
          value={street}
          onChange={handleStreetChange}
          placeholder="Street"
        />
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="City"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSuperhero;
