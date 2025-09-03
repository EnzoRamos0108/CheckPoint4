import { useEffect, useState } from 'react';

export default function Contato() {
  const [contato, setContato] = useState({ email: '', telefone: '' });

  useEffect(() => {
    fetch('http://localhost:5001/contato')
      .then(res => res.json())
      .then(data => setContato(data));
  }, []);

  return (
    <div>
      <h2>Contato</h2>
      <p>Email: {contato.email}</p>
      <p>Telefone: {contato.telefone}</p>
    </div>
  );
}