import { IconHeartFilled } from "@tabler/icons-react";

export default function Rodape() {
  return (
    <footer>
      <div className="flex justify-end items-center bg-zinc-700 text-zinc-400 p-4 text-center gap-2 text-sm">
        <span>Copyright © {new Date().getFullYear()}</span>
        <span>Todos os direitos reservados. </span>
        <span>Desenvolvido </span>
        <IconHeartFilled size={18} className="text-red-500" />
        <span>por Jerônimo Ferreira</span>
      </div>
    </footer>
  );
}
