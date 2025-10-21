import { useState } from 'react';

function CadastrarMesas() {
  const [mesa, setMesa] = useState({ numero: '', capacidade: '', status: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setMesa(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Mesa ${mesa.numero} cadastrada com sucesso!`);
  }

  return (
    <div>
      <h1>Cadastrar Mesas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="numero" placeholder="Número da mesa" onChange={handleChange} />
        <input type="text" name="capacidade" placeholder="Capacidade" onChange={handleChange} />
        <input type="text" name="status" placeholder="Status (ocupada/disponível)" onChange={handleChange} />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastrarMesas;
