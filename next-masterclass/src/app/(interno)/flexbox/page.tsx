import Caixa from "@/components/Caixa";
import Pagina from "@/components/template/Pagina";

export default function Page() {
  return (
    <div className="h-96 w-[900px]">
      <h1>Flexbox</h1>
      <div
        className="
                bg-zinc-700                
                items-start          
                p-1 gap-1 h-full
            "
      >
        <Caixa texto="João" />
        <Caixa texto="Maria" />
        <Caixa texto="José" />
      </div>

      <h1>Flexbox - Justify Between</h1>
      <div
        className="
                pt-3 flex
                justify-between
            "
      >
        <Caixa texto="João" />
        <Caixa texto="Maria" />
        <Caixa texto="José" />
      </div>
      <h1>Flexbox - Justify Center</h1>
      <div
        className="
                pt-3 flex             
                justify-around
                items-end
                gap-3
            "
      >
        <Caixa texto="João" className="w-24" />
        <Caixa texto="Maria" className="flex flex-grow" />
        <Caixa texto="José" className="w-20" />
      </div>
    </div>
  );
}
