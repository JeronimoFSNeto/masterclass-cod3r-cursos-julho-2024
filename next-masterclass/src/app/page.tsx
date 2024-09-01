import { IconDashboard } from "@tabler/icons-react";
import Link from "next/link";

export default function Home(props: any) {
  function NomeUsuario() {
    return "João";
  }
  return (
    <div className="flex flex-col items-center">
      <IconDashboard size={100} stroke={0.5} className="text-zinc-500" />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-black">Olá, {props.nomeUsusario}</h1>
        <p className="text-lg">Seja Bem vindo!</p>
      </div>
      <div>
        <Link href="/primeiro ">Entrar</Link>
      </div>
    </div>
  );
}
