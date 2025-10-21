import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#222",
        padding: "10px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2>Sistema de Mesas</h2>
      <nav>
        <Link to="/" style={{ color: "white", margin: "0 10px" }}>Home</Link>
        <Link to="/cadastrar" style={{ color: "white", margin: "0 10px" }}>Cadastrar</Link>
        <Link to="/reservar" style={{ color: "white", margin: "0 10px" }}>Reservar</Link>
      </nav>
    </header>
  );
}

export default Header;
