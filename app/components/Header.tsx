import logo from '../assets/logo.svg';
import { config } from "../../config.js";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-3" />
        <h1 className="text-xl font-bold">{config.pageCompany}</h1>
      </div>
      <nav className="flex space-x-4">
        {/* <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/stock-balance" className="hover:underline">
          Saldo do Estoque
        </Link> */}
      </nav>
    </header>
  );
}

export default Header;