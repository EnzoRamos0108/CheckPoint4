import { useEffect, useState } from 'react';

export default function Sobre() {
  const [sobre, setSobre] = useState({ texto: '' });

  useEffect(() => {
    fetch('http://localhost:5001/sobre')
      .then(res => res.json())
      .then(data => setSobre(data));
  }, []);

  return (
    <div>
      <h2>Sobre Nós</h2>
      <p>{sobre.texto}</p>
    </div>
  );
}