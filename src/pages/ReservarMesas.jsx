import { useState } from 'react';

function ReservarMesas() {
  const [reserva, setReserva] = useState({
      nome: ''
    , contato: ''
    , data: ''
    , hora: ''
    , mesa: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setReserva(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Reserva confirmada para ${reserva.nome}!`);
  }

  return (
    <div>
      <h1>Reservar Mesas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome do cliente" onChange={handleChange} />
        <input type="text" name="contato" placeholder="Contato" onChange={handleChange} />
        <input type="date" name="data" onChange={handleChange} />
        <input type="time" name="hora" onChange={handleChange} />
        <input type="text" name="mesa" placeholder="Número da mesa" onChange={handleChange} />
        <button type="submit">Confirmar Reserva</button>
      </form>
    </div>
  );
}

export default ReservarMesas;
