import { useEffect, useState } from 'react';

export default function Carros() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/carros')
      .then(res => res.json())
      .then(data => setCarros(data));
  }, []);

  return (
    <div>
      <h2>Carros</h2>
      <ul>
        {carros.map(carro => (
          <li key={carro.id}>{carro.nome}</li>
        ))}
      </ul>
    </div>
  );
}