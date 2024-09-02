import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {
  constructor(private repo: UsuarioRepository) {}

  @Get('todos')
  async obterTodos() {
    return this.repo.obterTodos();
  }
  @Get(':id')
  async obterPorId(@Param('id') id: string) {
    const usuario = await this.repo.obterPorId(+id); // Convertendo o id para número
    return usuario;
  }

  @Post()
  async criar(@Body() usuario: Usuario) {
    const novoUsuario = await this.repo.criar(usuario);
    return novoUsuario;
  }
  @Post('atualizar')
  async atualizar(@Body() usuario: Usuario) {
    return { ...usuario, id: 100 };
  }

  @Post('deletar')
  async deletar(@Body() { id }: { id: number }) {
    return this.repo.deletar(id);
  }
}
