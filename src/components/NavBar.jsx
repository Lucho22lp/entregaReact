import CartWidget from "./CartWidget.jsx";

function NavBar() {
  return (
    <nav>
      <div className="logo">MiTienda</div>

      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Hombre</a></li>
        <li><a href="#">Mujer</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;

