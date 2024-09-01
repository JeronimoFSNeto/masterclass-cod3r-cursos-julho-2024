import { Button } from "@/components/ui/button";
import { IconDashboard } from "@tabler/icons-react";
import Link from "next/link";

export default function Home(props: any) {
  function NomeUsuario() {
    return "João";
  }
  return (
    <div className="flex flex-col items-center w-full h-96">
      <IconDashboard size={100} stroke={0.5} className="text-zinc-500" />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-black">Olá, {props.nomeUsusario}</h1>
        <p className="text-lg">Seja Bem vindo!</p>
      </div>
      <div>
        <Link href="/primeiro" className="px-4 py-2">
          <Button>Entrar</Button>
        </Link>
      </div>
    </div>
  );
}
