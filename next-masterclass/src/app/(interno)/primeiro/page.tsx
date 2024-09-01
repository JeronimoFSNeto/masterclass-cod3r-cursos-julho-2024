import Pagina from "@/components/template/Pagina";
import Link from "next/link";

export default function Primeiro() {
  const raio = 4.5;
  const PI = 3.14159;

  const titulo = (
    <div>
      <h1>Primeiro Componente</h1>
      <h2>Assuntos importantes para o Primeiro Componente</h2>
    </div>
  );

  function anoAtual() {
    return new Date().getFullYear();
  }

  // uma função para gerar uma lista
  function gerarUmaLista() {
    return (
      <ul className="pl-12 list-disc">
        <li>João</li>
        <li>Maria</li>
        <li>Feijão</li>
      </ul>
    );
  }
  return (
    <div>
      {titulo}
      <h1>MasterClass - React & NextJS</h1>
      <div className="flex flex-col">
        <span>{Math.random()}</span>
        <span>{anoAtual()}</span>
      </div>
      {gerarUmaLista()}
      <div>
        <span>{PI * Math.pow(raio, 2)}</span>
      </div>
    </div>
  );
}
