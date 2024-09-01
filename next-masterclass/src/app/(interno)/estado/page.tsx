// 'use client' quer dizer que vamos rodar a pagina diretamente no browser
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { IconSend, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

export default function Page() {
  // criando um estado para alterar o nome da tarefa
  //se apresentar erro pode colocar assim -> useState<string[]>([])
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [nome, setNome] = useState<string>("");

  function adicionarTarefa() {
    if (nome) {
      setTarefas([...tarefas, nome]);
      setNome("");
    }
  }

  function excluirTarefa(i: number) {
    setTarefas(tarefas.filter((_, tarefa) => tarefa !== i));
  }
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <Label htmlFor="tarefa">Tarefa</Label>
        <div className="flex gap-2 items-center">
          <Input
            id="tarefa"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="flex-grow bg-zinc-800 px-4 py-2 rounded-md outline-none text-xl"
            onKeyUp={(e) => e.key === "Enter" && adicionarTarefa()}
          />
          <Button onClick={adicionarTarefa} className="bg-blue-500">
            <IconSend />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-2xl font-black">Lista de Tarefas</Label>
        <ul className="flex flex-col gap-2">
          {tarefas.map((tarefa, i) => {
            return (
              <li
                key={i}
                className=" bg-zinc-800 text-zinc-500 rounded-md p-4 py-4 flex justify-between items-center gap-2"
              >
                <span className="flex-grow">{tarefa}</span>
                <IconTrash
                  onClick={() => excluirTarefa(i)}
                  size={18}
                  className="text-red-500 cursor-pointer"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
