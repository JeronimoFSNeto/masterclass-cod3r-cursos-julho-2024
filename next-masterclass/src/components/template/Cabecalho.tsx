import Logo from "./Logo";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho() {
  return (
    <header className="flex bg-zinc-800 gap-5 px-5 items-center h-20">
      <Logo />
      <span className="flex-grow">Cabeçalho</span>
      <MenuUsuario />
    </header>
  );
}
