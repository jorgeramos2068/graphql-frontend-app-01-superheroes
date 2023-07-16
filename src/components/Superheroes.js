export const Superheroes = ({ superheroes = [] }) => {
  return (
    <div>
      {superheroes.map(({ id, name, phone }) => (
        <div key={id}>
          {name} - {phone}
        </div>
      ))}
    </div>
  );
};

export default Superheroes;
